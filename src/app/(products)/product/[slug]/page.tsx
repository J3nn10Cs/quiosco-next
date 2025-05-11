import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components";

interface Props {
  params : {
    slug : string
  }
}

async function getProducts(category:string) {
  const products = await prisma.product.findMany({
    where: { 
      category: {
        slug : category
      }
    }
  })

  if(!products){
    notFound();
  }

  return products
}

export default async function ProductPage({params} : Props) {
  const products = await getProducts(params.slug)

  if(products.length === 0){
    notFound()
  }

  return (
    <>
      <ProductGrid
        products={products}
      />
    </>
  )
}
