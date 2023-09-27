import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // eslint-disable-next-line no-unused-vars
  const submitHandler = ({ name, email }: FormData) => {};

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid gap-14 grid-cols-1 items-center justify-center sm:grid-cols-2 shadow-lg border border-gray-500/40 p-10 rounded-md"
      >
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Name</span>
          <input
            {...register("name", {
              required: "You need to provide your name.",
              minLength: {
                value: 3,
                message: "You need to your name",
              },
            })}
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
        <Button>Save</Button>
      </form>
    </>
  );
};

export default Profile;
