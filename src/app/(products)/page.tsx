import { ProductGrid } from '@/components'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation';
import React from 'react'

async function getProducts() {
  const products = await prisma.product.findMany()

  if(!products){
    notFound();
  }

  return products
}



export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <>
        <ProductGrid
          products={products}
        />
      </>
    </>
  )
}
