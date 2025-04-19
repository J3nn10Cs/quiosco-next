import { Product } from "@prisma/client"
import { ProductGridItem } from '@/components';

interface Props {
  products : Product[]
}

export function ProductGrid({products} : Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-start mb-3 animate__animated animate__fadeIn"> 
      {products.map(product => (
        <ProductGridItem
          products={product}
          key={product.id}
        />
      ))}
    </div>
  )
}
