import Button from "@/components/Button";
import React from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import repository from "@/services/userRepository";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // eslint-disable-next-line no-unused-vars
  const submitHandler = async ({ name, email, password }: FormData) => {
    /*  await repository.insertUser({ name, email, password }); */
  };

  return (
    <div className="border border-gray-500/40 p-10 rounded-md">
      <h1 className="text-center font-bold text-2xl pb-14 text-yellow-500">
        Create account
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid gap-14 grid-cols-1 items-center justify-center sm:grid-cols-2 shadow-lg "
      >
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Name</span>
          <input
            {...register("name", { required: "This is required." })}
            type="text"
            className="rounded-full px-2 text-base text-black"
          />
        </div>
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Email</span>
          <input
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/i,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.email ? (
            <div className="text-red-500 pl-2">{errors.email.message}</div>
          ) : null}
        </div>

        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Password</span>
          <input
            {...register("password", {
              required: "Please enter password",
              minLength: {
                value: 3,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                message:
                  "Password must contain at least one letter, one number, and one special character",
              },
            })}
            type="password"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.password ? (
            <div className="text-red-500 pl-2">{errors.password.message}</div>
          ) : null}
        </div>
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default Register;
