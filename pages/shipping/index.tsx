import { Store } from "@/Context/StoreCartContext";
import Button from "@/components/Button";
import CheckoutWizard from "@/components/CheckoutWizard";
import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

interface UserAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
}

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserAddress>();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({
    fullName,
    address,
    postalCode,
    city,
    country,
  }: UserAddress) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, postalCode, city, country },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: { fullName, address, postalCode, city, country },
      })
    );
  };

  return (
    <div className="pb-14">
      <CheckoutWizard activeStep={1} />
      <h1 className="text-center font-bold text-2xl py-14 text-yellow-500 w-full">
        Shipping Address
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid gap-4 grid-cols-1 items-center justify-center shadow-lg w-full "
      >
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Full Name</span>
          <input
            {...register("fullName", { required: "This is required." })}
            type="text"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.fullName ? (
            <div className="text-red-500 pl-2">{errors.fullName.message}</div>
          ) : null}
        </div>
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Address</span>
          <input
            {...register("address", { required: "This is required." })}
            type="text"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.address ? (
            <div className="text-red-500 pl-2">{errors.address.message}</div>
          ) : null}
        </div>
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">City</span>
          <input
            {...register("city", { required: "Please enter a city name." })}
            type="text"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.city ? (
            <div className="text-red-500 pl-2">{errors.city.message}</div>
          ) : null}
        </div>
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Postal Code</span>
          <input
            {...register("postalCode", {
              required: "Just numbers is allowed.",
            })}
            type="number"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.postalCode ? (
            <div className="text-red-500 pl-2">{errors.postalCode.message}</div>
          ) : null}
        </div>
        <div className="grid gap-1 ">
          <span className=" pl-3 text-sm ">Country</span>
          <input
            {...register("country", { required: "This is required." })}
            type="text"
            className="rounded-full px-2 text-base text-black"
          />
          {errors.country ? (
            <div className="text-red-500 pl-2">{errors.country.message}</div>
          ) : null}
        </div>
        <Button>Next</Button>
      </form>
    </div>
  );
};

export default ShippingAddress;

ShippingAddress.auth = true;
