import { AddProductButton } from "@/components/cart/AddProductButton"
import { titleFont } from "@/config/fonts"
import { formatCurrency } from "@/helpers/currency"
import { Product } from "@prisma/client"

interface Props {
  products : Product
}

export function ProductGridItem({products} : Props) {
  return (
    <div 
      className="animate__animated animate__fadeIn flex flex-col justify-between h-full border bg-white p-2 rounded-md mx-3"
    >
      <div className="p-1">
        <img 
          src={`/products/${products.image}.jpg`} 
          alt={`Imagen de ${products.name}`}
          className="w-full bg-cover rounded-sm"
        />
        <h3 className={`${titleFont.className} font-bold`}>{products.name}</h3>
        <h2 className={`${titleFont.className} font-extrabold text-yellow-500 my-2 text-lg`} >{formatCurrency(products.price)}</h2>
      </div>

      <div className="p-2">
        <AddProductButton
          product={products}
        />
      </div>
    </div>
  )
}
