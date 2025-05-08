import { ProductSearch } from '@/components/product/ProductSearch';
import ProductTable from '@/components/product/ProductTable';
import { Heading } from '@/components/ui/heading/Heading'
import { prisma } from '@/lib/prisma';
import { Link } from 'lucide-react';
import React from 'react'

async function searchProducts(search : string){
  const products = await prisma.product.findMany({
    where : {
      //buscamos por el nombre del producto
      name : {
        contains : search,
        //para buscar sin importar mayusculas o minusculas
        mode : 'insensitive'
      }
    },
    include : {
      category : true
    }
  })

  return products;
}

export default async function SearchPage ({searchParams} : {searchParams : {search : string}}) {

  const products = await searchProducts(searchParams.search);

  return (
    <>
      <Heading>
        Resultados de busqueda {searchParams.search}
      </Heading>

      <div className='flex flex-col lg:flex-row lg:justify-end mt-5'>
        <ProductSearch/>
      </div>

      {products.length ? (
        <ProductTable
          products={products}
        />
      ):(
        <div className='flex justify-center items-center mt-5'>
          <h1 className='text-2xl font-bold text-gray-500'>No se encontraron productos</h1>
        </div>
      )}
      
    </>
  )
}
