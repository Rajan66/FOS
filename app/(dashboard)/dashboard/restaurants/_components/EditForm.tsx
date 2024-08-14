"use client";

import Loading from "@/components/Loading";
import InputBox from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import { useRouter } from "next/navigation";
import { useGetRestaurant } from "@/hooks/restaurantsQueries";
import { updateRestaurant } from "@/apicalls/restaurant";
import { RestaurantSchema, TRestaurant } from "@/schemas/restaurantSchema";

type EditProps = {
  id: string;
  fromProfilePage?: boolean;
};

const EditForm: React.FC<EditProps> = ({ id }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const session = useSession()
  const { data: restaurantData, isPending } = useGetRestaurant(Number(id));

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<TRestaurant>({
    resolver: zodResolver(RestaurantSchema),
    defaultValues: {
      name: restaurantData?.name,
      email: restaurantData?.email,
      cuisine: restaurantData?.cuisine,
      contact: restaurantData?.contact?.toString(),
      image: restaurantData?.image?.toString(),
    },
  });


  useEffect(() => {
    if (restaurantData) {
      setValue("name", restaurantData?.name || "");
      setValue("email", restaurantData?.email || "");
      setValue("cuisine", restaurantData?.cuisine || "");
      setValue(
        "contact",
        restaurantData?.contact?.toString()
      );
      setValue("image", restaurantData?.image?.toString());
    }
  }, [restaurantData, setValue]);

  const { mutate, isPending: Updating } = useMutation({
    mutationFn: updateRestaurant,
    onSettled(data: any) {
      if (data.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["restaurant", id] });
        queryClient.invalidateQueries({ queryKey: ["restaurants"] });
        toast.success("Restaurant Updated Successfully");
        reset();
        router.push("/dashboard/restaurants");
      }

      if (data.response.status === 422) {
        toast.error("Please fill all the required fields.");
      } else {
        toast.error("Failed to update Instructor, Something went wrong.");
      }
    },
  });

  const onSubmit = (data: TRestaurant) => {
    console.log(data)
    const modifiedData = {
      id: Number(id),
      data: {
        ...data,
      },
      token: session?.data?.user?.access_token
    };

    mutate(modifiedData);
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-8 py-10 px-5 vsm:px-14 rounded-lg border border-input shadow"
    >
      {/* Required Fields  */}
      <InputBox<TRestaurant>
        name="name"
        id="name"
        placeholder="Enter Restaurant's Name..."
        register={register}
        error={(errors && errors?.name?.message?.toString()) || ""}
        desc="enter the name of restaurant"
        label="Restaurant's Name *"
      />

      <InputBox<TRestaurant>
        name="cuisine"
        id="cuisine"
        placeholder="Enter Cuisine..."
        register={register}
        error={(errors && errors?.cuisine?.message?.toString()) || ""}
        desc="enter the restaurant's cuisine"
        label="Restaurant's Cuisine *"
      />

      <InputBox<TRestaurant>
        name="email"
        id="email"
        placeholder="Enter Email..."
        register={register}
        error={(errors && errors?.email?.message?.toString()) || ""}
        desc="enter the email of restaurant"
        label="Restaurant's Email *"
      />

      <InputBox<TRestaurant>
        name="contact"
        id="contact"
        placeholder="Enter Contact Information..."
        register={register}
        error={
          (errors && errors?.contact?.message?.toString()) || ""
        }
        desc="enter the contact of restaurant"
        label="Restaurant's Contact *"
      />


      <ImageUpload
        control={control}
        errors={errors}
        defImg={restaurantData?.image}
      />


      {/* Form Submission */}
      <Button type="submit" className="px-5 py-2.5 my-auto text-[16px] w-[200px] h-[40px] font-medium  rounded-md  border-r-0 ">
        {isPending ? (
          <div className="flex items-center gap-2">
            <Loader2 className="size-5 animate-spin" />
            <p>Editing..</p>
          </div>
        ) : (
          "Edit Restaurant"
        )}
      </Button>
    </form>
  );
};

export default EditForm;
