import { ProductGrid } from '@/components'
import { prisma } from '@/lib/prisma'
import React from 'react'

async function getProducts() {
  const products = await prisma.product.findMany()

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
