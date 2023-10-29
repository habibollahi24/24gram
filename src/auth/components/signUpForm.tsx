import React from "react";
import {
  FieldError,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpSchemaType } from "../validation";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (values) => {
    console.log(values);
  };

  return (
    <>
      <form
        className="w-[350px] mt-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputField
          label="Name"
          register={register}
          name="name"
          error={errors.name}
        />
        <InputField
          label="Username"
          register={register}
          name="username"
          error={errors.username}
        />
        <InputField
          label="Email"
          register={register}
          name="email"
          error={errors.email}
        />
        <InputField
          label="Password"
          register={register}
          name="password"
          type="password"
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full bg-primary-600 text-white rounded-md py-2 "
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: "name" | "username" | "email" | "password";
  register: UseFormRegister<SignUpSchemaType>;
  error: FieldError | undefined;
}

const InputField = ({ label, type = "text", name, register, error }: Props) => {
  return (
    <div className="flex flex-col mb-8 relative">
      <input
        type={type}
        placeholder={label}
        {...register(name)}
        className="bg-dark-4 px-2 py-3 placeholder:text-xs rounded-md focus:border-none  focus:outline-none focus:outline-primary-500 text-light-2"
      />
      {error && (
        <p className="absolute text-xs -bottom-5 left-0 text-danger">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SignUpForm;
