'use client'
import { SearchSchema } from '@/schema'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export const ProductSearch = () => {

  const router = useRouter();

  const handleSearchForm = (formData : FormData) => {

    const data = {
      search : formData.get('search')
    }

    const result = SearchSchema.safeParse(data)

    if(!result.success){
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })

      return
    }

    router.push(`/admin/products/search?search=${result.data.search}`)
  }

  return (
    <>
      <form 
        action={handleSearchForm}
        className="relative">
        <div className="flex items-center bg-white rounded-full h-10 px-4 shadow-sm w-64">
          <input
            type="search"
            name="search"
            placeholder="Buscar Producto"
            className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
          />
          <button type="submit" className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 56.966 56.966"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786
                c0-12.682-10.318-23-23-23s-23,10.318-23,23
                s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162
                l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                c0.779,0,1.518-0.297,2.079-0.837
                C56.255,54.982,56.293,53.08,55.146,51.887z
                M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}
