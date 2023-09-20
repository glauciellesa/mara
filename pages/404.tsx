import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl py-9">404 - Page Not Found</h1>
      <p>
        Go to <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default Custom404;
