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
      className="animate__animated animate__fadeIn border bg-white p-2 rounded-md mx-3 h-full"
    >
      <img 
        src={`/products/${products.image}.jpg`} 
        alt={`Imagen de ${products.name}`}
        className="w-full bg-cover rounded-sm"
      />

      <div className="p-2">
        <h3 className={`${titleFont.className} font-bold`}>{products.name}</h3>
        <h2 className={`${titleFont.className} font-extrabold text-yellow-500 my-2 text-lg`} >{formatCurrency(products.price)}</h2>
        <AddProductButton
          product={products}
        />
      </div>
    </div>
  )
}
