import clsx from "clsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface InputBoxProps<T> {
  name: keyof T;
  placeholder: string;
  id: string;
  register: (name: keyof T, options?: RegisterOptions| any) => UseFormRegisterReturn;
  desc?: string;
  error?: string;
  label?: string;
  type?: string;
  defVal?: any;
  value?: any;
  disabled?: boolean;
  maxLength?: number;
}

function InputBox<T>({
  name,
  placeholder,
  id,
  register,
  desc,
  error,
  label,
  type,
  defVal,
  value,
  disabled,
  maxLength,
}: InputBoxProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          htmlFor={name as string}
          className="pl-1 font-semibold text-[0.9rem] opacity-80"
        >
          {label}
        </Label>
      )}
      <Input
        {...register(name)}
        id={id}
        value={value}
        defaultValue={defVal}
        type={type !== "" ? type : "text"}
        maxLength={maxLength && maxLength}
        name={name as string}
        placeholder={placeholder}
        className={clsx("border-content py-6", {
          "border-[2px] border-destructive placeholder:text-destructive":
            error !== "",
        })}
        disabled={disabled}
      />
      {/* {label && (
        <span
          className={clsx("pl-2 text-xs text-content", {
            hidden: error !== "",
          })}
        >
          {desc}
        </span>
      )} */}
      {error && (
        <span className="pl-3 text-sm font-semibold text-destructive">
          ** {error}
        </span>
      )}
    </div>
  );
}

export default InputBox;