"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Image as ImgIcon, X } from "lucide-react";
import { TRestaurant } from "@/schemas/restaurantSchema";

type ImageUploadProps = {
  control: Control<TRestaurant>;
  errors?: FieldErrors<TRestaurant>;
  defImg?: string;
};

const ImageUpload = ({ control, errors, defImg }: ImageUploadProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [defaultImage, setDefaultImage] = useState<string | undefined>(defImg);
  const imgRef = useRef<HTMLInputElement>(null);

  const typefile = file?.type.split("/")[0];

  useEffect(() => {
    setDefaultImage(defImg);
  }, [defImg]);

  const handleDeleteImage = () => {
    setFile(undefined);
    setDefaultImage(undefined);
  };

  // Function to convert file to Base64
  const handleImageUpload = async (file: File | undefined) => {
    if (!file) return null;

    return new Promise<string | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="flex flex-col">
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <div>
            <input
              type="file"
              name="image"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                setFile(file);

                if (file) {
                  const base64Image = await handleImageUpload(file);
                  field.onChange(base64Image?.split(",")[1]); // Set Base64 string
                } else {
                  field.onChange(undefined); // Reset the field if no file is selected
                }
              }}
              hidden
              ref={imgRef}
              accept="image/jpg, image/jpeg, image/png, image/webp"
            />
          </div>
        )}
      />

      <div className="flex vsm:flex-row flex-col gap-y-2 vsm:items-center gap-x-10">
        <Button
          onClick={() => imgRef?.current?.click()}
          variant={"secondary"}
          type="button"
          className="text-background w-fit"
        >
          <ImgIcon className="size-6" /> &nbsp;&nbsp;Select Image
        </Button>

        {defaultImage && !file && (
          <div className="relative mt-3 flex size-[100px] cursor-pointer flex-col gap-2 rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_APP_URL}/storage/${defaultImage}`}
              fill
              alt=""
              className={cn(
                "cursor-pointer object-cover rounded-full border border-input",
                {
                  "border-[3px] border-red-500":
                    errors?.image?.message &&
                    typeof errors?.image?.message === "string",
                }
              )}
            />
            <X
              onClick={handleDeleteImage}
              className="absolute top-1 right-1 p-1 rounded-full bg-primary/90 text-background size-8"
            />
          </div>
        )}

        {file && typefile === "image" && (
          <div className="relative mt-3 flex size-[100px] cursor-pointer flex-col gap-2 rounded-full">
            <Image
              src={URL.createObjectURL(file)}
              fill
              alt=""
              className={cn(
                "cursor-pointer object-cover rounded-full border border-input",
                {
                  "border-[3px] border-red-500":
                    errors?.image?.message &&
                    typeof errors?.image?.message === "string",
                }
              )}
            />
            <X
              onClick={handleDeleteImage}
              className="absolute top-1 right-1 p-1 rounded-full bg-primary/90 text-background size-8"
            />
          </div>
        )}
      </div>

      {errors?.image?.message ? (
        <span className="pl-3 text-sm font-semibold text-destructive">
          {typeof errors?.image?.message === "string"
            ? errors?.image?.message
            : null}
        </span>
      ) : null}
    </div>
  );
};

export default ImageUpload;
