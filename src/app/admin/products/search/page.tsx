import { Heading } from '@/components/ui/heading/Heading'
import { prisma } from '@/lib/prisma';
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
    }
  })

  return products;
}

export default async function SearchPage ({searchParams} : {searchParams : {search : string}}) {

  searchProducts(searchParams.search);

  return (
    <>
      <Heading>
        Resultados de busqueda
      </Heading>
    </>
  )
}
