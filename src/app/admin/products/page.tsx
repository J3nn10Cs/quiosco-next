import { ProductGrid } from '@/components';
import ProductTable from '@/components/product/ProductTable';
import { Heading } from '@/components/ui/heading/Heading'
import { prisma } from '@/lib/prisma'
import React from 'react'

const getProducts = async () => {
  const product = await prisma.product.findMany();

  return product;
}

export default async function ProductsPage() {

  const products = await getProducts();
  
  return (
    <>
      <Heading>
        Administrar los productos
      </Heading>

      <ProductTable
        products={products}
      />
      
    </>
  )
}
