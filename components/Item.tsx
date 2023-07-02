import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "@/Context/StoreCartContext";
import { CartItem } from "@/model/CartItem";

interface ItemProps {
  item: CartItem;
}

const Item = ({ item }: ItemProps) => {
  const { dispatch } = useContext(Store);
  console.log("tes", item);
  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
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
            <label htmlFor="quantity-0"></label>
            <select
              name="quantity-0"
              id="quantity-0"
              className="border bg-transparent rounded-md px-3 py-1 outline-0"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
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
