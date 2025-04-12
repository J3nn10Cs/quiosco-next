import { XCircleIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/helpers/currency";
import { OrderItem } from "@/types"
import { useStore } from "@/store";
import { useMemo } from "react";

interface Props {
  item : OrderItem
}

const MIN_QUANTITY = 1
const MAX_QUANTITY = 10

export function OrderSumary({item} : Props) {

  const increment = useStore(state => state.incrementQuantity);
  const decrement = useStore(state => state.decrementQuantity);
  const deleteOrder = useStore(state => state.deleteOrder);

  const disebleIncrement = useMemo(() => item.quantity === MAX_QUANTITY,[item.quantity])

  const disebleDecrement = useMemo(() => item.quantity === MIN_QUANTITY,[item.quantity])
  
  return (
    <div className="mt-4 bg-white flex gap-5 items-center shadow-xl rounded-lg p-3 mb-4" key={item.id}>
      <img
        className="object-contain h-32"
        src={`/products/${item.image}.jpg`}
        alt={`Imagen de ${item.name}`}
      />
      <div>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-lg font-bold text-yellow-500">{formatCurrency(item.price)}</p>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 flex gap-4 items-center justify-center rounded-full px-4 py-2 shadow-md w-fit">
            <button 
              className="text-xl font-bold w-8 h-8 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded-full transition disabled:opacity-20"
              onClick={() => decrement(item.id)}
              disabled={disebleDecrement}
            >
              -
            </button>
            <p className="text-lg font-semibold text-gray-800">
              {item.quantity}
            </p>
            <button 
              className="text-xl font-bold w-8 h-8 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded-full transition disabled:opacity-20"
              onClick={() => increment(item.id)}
              disabled={disebleIncrement}
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => {deleteOrder(item.id)}}
          >
            <XCircleIcon className="text-red-600 h-8 w-8"/>
          </button>
        </div>
      </div>
    </div>
  )
}
