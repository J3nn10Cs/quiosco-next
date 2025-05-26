'use client'
import { createProduct } from "@/actions/create-product-action"
import { updateProduct } from "@/actions/update-product-action"
import { ProductSchema } from "@/schema"
import { Product } from "@prisma/client"
import React from "react"
import { toast } from "react-toastify"
import { useRouter, useParams } from "next/navigation"

interface Props {
  product? : Product
  children : React.ReactNode
}

export const EditProductForm = ({children, product} : Props) => {

  const router = useRouter();
  const params = useParams();
  const id = +params.id!;

  const handleSubmit = async (formData : FormData) => {
    const data = {
      name : formData.get('name'),
      price : formData.get('price'),
      categoryId : formData.get('categoryId'),
      image : formData.get('image')
    }

    const result = ProductSchema.safeParse(data);

    if(!result.success){
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    const response = await createProduct(result.data);
    if(response?.errors){
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    const responses = await updateProduct(result.data, id);
    if(response?.errors){
      response.errors.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    toast.success('Producto creado correctamente')
    router.push('/admin/products')
  }

  return (
    <>
      <div className="bg-white shadow-md rounded px-5 mt-10 py-10 max-w-3xl mx-auto">
        {product && (
          <>
            <h2 className="text-2xl font-bold text-center mb-5">
              {product.name}
            </h2>
          </>
        )}
        <form action={handleSubmit} className="space-y-5">
          
          {children}

          <input 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value={product ? 'Actualizar Producto' : 'Crear Producto'}
          />
        </form>
      </div>
    </>
  )
}
