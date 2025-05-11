'use client'

import { Product } from "@prisma/client"
import { useStore } from "@/store"

interface Props{
  product : Product
}

export const AddProductButton = ({product} : Props) => {

  const addtoOrder = useStore(state => state.addToOrder)
  
  return (
    <>
      <button
          type="button"
          className="animate__animated animate__fadeIn transition-all duration-200 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 w-full rounded-3xl"
          onClick={() => addtoOrder(product)}
        >
          Agregar
        </button>
    </>
  )
}
