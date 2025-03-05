import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductGrid, TopMenu } from "@/components";
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

  return products
}

export default async function OrderPage({params} : Props) {
  const {slug} = params
  const products = await getProducts(slug)
  
  if(!products){
    notFound()
  }
  return (
    <>
      <TopMenu />
      <ProductGrid
        products={products}
      />
    </>
  )
}
