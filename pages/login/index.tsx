import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";

const Login = () => {
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
          <div className="grid gap-4">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button>Sing in</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
