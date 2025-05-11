import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation';
import React from 'react'

async function getProduct (id : number){
  const product = await prisma.product.findUnique({
    where : {
      id
    }
  })

  if(!product){
    notFound();
  }

  return product;
}

export default async function EditProduct({params}: {params : {id : string}}) {

  const product = await getProduct(+params.id);

  console.log(product);

  return (
    <>

    </>
  )
}
