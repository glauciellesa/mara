import Button from "@/components/Button";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [inputValue, setInputValue] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="grid gap-14 grid-cols-1 items-center sm:grid-cols-2 shadow-lg border border-gray-500/40 p-10 rounded-md">
        <div className="grid gap-4 h-fit p-2">
          <p className="p-2 text-6xl">Welcome!</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quibusdam, similique vel minus ab necessitatibus nihil nulla
            laboriosam autem nemo temporibus harum, ut deserunt delectus, optio
            exercitationem commodi animi. Odit!
          </p>
        </div>
        <div className="grid gap-10 p-5 bg-gray-800/30 rounded-sm ">
          <form className="grid gap-2" onSubmit={handleSubmit(submitHandler)}>
            <div className="grid gap-1">
              <span className=" pl-3 text-sm ">Email</span>
              <input
                type="email"
                className="rounded-full px-2 text-base text-black"
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            {errors.email ? (
              <div className="text-red-500 pl-2">{errors.email.message}</div>
            ) : null}

            <div className="grid gap-2">
              <span className=" pl-3 text-sm ">Password</span>
              <input
                className="rounded-full px-2 text-base text-black"
                type="password"
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
                required
              />
            </div>
            {errors.password ? (
              <div className="text-red-500 pl-2">{errors.password.message}</div>
            ) : null}
            <Button>Sing in</Button>
          </form>
          <div className="mb-4">
            Don&apos;t have an accaunt? &nbsp;
            <Link href="register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
