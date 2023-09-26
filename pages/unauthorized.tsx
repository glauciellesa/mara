import { useRouter } from "next/router";
import React from "react";

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  console.log(router);
  console.log(router.query);

  return (
    <div>
      <h1 className="text-xl"> Access Denied </h1>
      {message ? <div className="px-2 mb-4 text-red-500">{message}</div> : null}
    </div>
  );
};

export default Unauthorized;
