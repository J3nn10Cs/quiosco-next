import { EditProductForm } from '@/components/product/EditProductForm'
import FormPoduct from '@/components/product/FormPoduct'
import { GoBackButton } from '@/components/ui/GoBackButton/GoBackButton'
import { Heading } from '@/components/ui/heading/Heading'
import React from 'react'

export default function CreateProduct () {
  return (
    <>
      <Heading>
        Nuevo producto
      </Heading>

      <GoBackButton/>

      <EditProductForm>
        <FormPoduct/>
      </EditProductForm>
    </>
  )
}
