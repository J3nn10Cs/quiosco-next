import { AddProductForm } from '@/components/product/AddProductForm'
import FormPoduct from '@/components/product/FormPoduct'
import { Heading } from '@/components/ui/heading/Heading'
import React from 'react'

export default function CreateProduct () {
  return (
    <>
      <Heading>
        Nuevo producto
      </Heading>

      <AddProductForm>
        <FormPoduct/>
      </AddProductForm>
    </>
  )
}
