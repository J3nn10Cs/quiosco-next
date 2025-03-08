import { titleFont } from "@/config/fonts"
import { Product } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface Props {
  products : Product
}

export function ProductGridItem({products} : Props) {
  return (
    <div 
      className="border bg-white mx-3 h-full"
    >

      <Image
        width={300}
        height={300}
        className="w-full bg-cover"
        src={`/products/${products.image}.jpg`}
        alt={`Imagen de ${products.name}`}
      />

      <div className="p-5">
        <h3 className={`${titleFont.className} font-bold text-lg`}>{products.name}</h3>
        <h2 className={`${titleFont.className} font-extrabold text-yellow-500 my-3 text-lg`} >{products.price}</h2>
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 w-full rounded"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  )
}
