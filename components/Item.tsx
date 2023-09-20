import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Store } from "@/Context/StoreCartContext";
import { CartItem } from "@/model/CartItem";

interface ItemProps {
  item: CartItem;
}

const Item = ({ item }: ItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { dispatch } = useContext(Store);
  console.log(item.product);
  console.log(item.quantity);

  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const handleLessItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch({
        type: "CART_ADD_ITEM",
        payload: { ...item, quantity: quantity },
      });
    } else {
      setQuantity((prev) => prev - 1);
      dispatch({ type: "CART_REMOVE_ITEM", payload: item });
    }
  };

  const handleMoreItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (quantity >= item.product.countInStock) {
      alert("Sorry. Product is out of stock");
      return;
    } else {
      setQuantity((prev) => prev + 1);
      dispatch({
        type: "CART_ADD_ITEM",
        payload: { ...item, quantity: quantity },
      });
    }
  };

  return (
    <li className="flex gap-5 border-b border-b-gray-500/40 py-8">
      <div>
        <Image
          width={150}
          height={75}
          className="rounded-t shadow object-cover "
          src={`/img/${item.product.image}`}
          alt={`${item.product.name}'s picture`}
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className=" flex flex-col relative gap-x-0.5">
          <div className="pr-12 ">
            <div className="pb-1.5">
              <h3 className="capitalize">
                <a href="#">{item.product.name}</a>
              </h3>
            </div>
            <div className="capitalize font-light text-gray-500/90">
              {item.product.category}
            </div>
            <div>
              <p>${item.product.price}</p>
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <div className="flex">
              <button
                onClick={handleLessItem}
                className="text-black bg-white font-bold text-sm w-6 h-6 border-none text-center"
              >
                -
              </button>
              <p className="bg-gray-500/90 w-6 h-6 bg-black border border-gray-500/90 text-center">
                {quantity}
              </p>
              <button
                onClick={handleMoreItem}
                className="text-black bg-white font-bold w-6 h-6 border-none text-center"
              >
                +
              </button>
            </div>
            <div className="absolute top-0 right-0">
              <button type="button" onClick={() => removeItemHandler(item)}>
                <span className="hidden">Remove</span>
                <FontAwesomeIcon icon={faX} className="pr-2" />
              </button>
            </div>
          </div>
        </div>
        <p>
          <FontAwesomeIcon icon={faCheck} className="pr-2" />
          <span>In Stock</span>
        </p>
      </div>
    </li>
  );
};

export default Item;
