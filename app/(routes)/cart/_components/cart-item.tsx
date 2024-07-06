import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex px-6 border-b">
      <div className="relative h-24 w-24 sm:h-48 sm:w-48 rounded-md overflow-hidden">
        <Image
          src={data.images[0].imageUrl}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 sm:ml-6 flex flex-col flex-1 justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={onRemove}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 pr-9">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;