import { EditProductForm } from '@/components/product/EditProductForm';
import FormPoduct from '@/components/product/FormPoduct';
import { GoBackButton } from '@/components/ui/GoBackButton/GoBackButton';
import { Heading } from '@/components/ui/heading/Heading';
import { prisma } from '@/lib/prisma'
import { Link } from 'lucide-react';
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

  return (
    <>
      <Heading>
        Editar Producto
      </Heading>

      <GoBackButton/>

      <EditProductForm product={product}>
        <FormPoduct product={product}/>
      </EditProductForm>
    </>
  )
}
