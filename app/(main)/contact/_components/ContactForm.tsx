"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBox from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRestaurant } from "@/apicalls/restaurant";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TRestaurant, RestaurantSchema } from "@/schemas/restaurantSchema";


const RestaurantForm = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const session = useSession();


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<TRestaurant>({
        resolver: zodResolver(RestaurantSchema),
        mode: "onChange",
    });

    const { mutate, isPending } = useMutation({
        mutationFn: createRestaurant,
        onSettled(apiData: any) {
            console.log(apiData)
            if (apiData?.status === 201) {
                queryClient.invalidateQueries({ queryKey: ["restaurants"] });
                toast.success("Your request has been sent");
                reset();
                router.push("/contact");
            }
            if (apiData.response.status === 422) {
                toast.error("Please fill all the required Fields");
            }
        },
    });


    const onSubmit = async (data: TRestaurant) => {
        console.log(data)
        const restaurantData = {
            data: data,
            token: session?.data?.user?.access_token
        };
        mutate(restaurantData);
    }


    return (
        <div className="rounded-lg border border-input shadow">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-8 py-10 px-5 vsm:px-14 "
            >
            
                    <h2>Tell us about your Restaurant</h2>
            
                <h2>Required Information</h2>
                <div className="flex gap-x-7 items-center">
                    {/* Required Fields  */}
                    <InputBox<TRestaurant>
                        name="name"
                        id="name"
                        placeholder="Restaurant's Name*"
                        register={register}
                        error={(errors && errors?.name?.message?.toString()) || ""}
                        desc="enter the restaurant's name"
                    />
                    <InputBox<TRestaurant>
                        name="email"
                        id="email"
                        placeholder="Restaurant's Email*"
                        register={register}
                        error={(errors && errors?.email?.message?.toString()) || ""}
                        desc="enter the restaurant's email"
                    />
                </div>

                <InputBox<TRestaurant>
                    name="contact"
                    id="contact"
                    placeholder="Restaurant's Contact*"
                    register={register}
                    error={(errors && errors?.contact?.message?.toString()) || ""}
                    desc="enter the restaurant's contact"
                />
                <div className="flex gap-x-4 items-center">
                    <InputBox<TRestaurant>
                        name="cuisine"
                        id="cuisine"
                        placeholder="Restaurant's Cuisine*"
                        register={register}
                        error={(errors && errors?.cuisine?.message?.toString()) || ""}
                        desc="enter the restaurant's cuisine"

                    />



                </div>

                {/* Form Submission */}
                <Button type="submit" className="px-5 py-2.5 my-auto text-[16px] w-[200px] h-[40px] font-medium text-white rounded-md bg-accent border-r-0 ">
                    {isPending ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="size-5 animate-spin" />
                            <p>Sending request..</p>
                        </div>
                    ) : (
                        "Send Request"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default RestaurantForm;
