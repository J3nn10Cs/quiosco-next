import { Category, Product } from "@prisma/client"
import { categories } from "../../../prisma/data"
import { ProductGridItem } from '@/components';

interface Props {
  products : Product[]
}

export function ProductGrid({products} : Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start mb-3"> 
      {products.map(product => (
        <ProductGridItem
          products={product}
          key={product.id}
        />
      ))}
    </div>
  )
}
