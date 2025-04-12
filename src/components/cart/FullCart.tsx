import React from 'react'
import Link from 'next/link'

export const FullCart = () => {
  return (
    <>
      <div className='flex justify-between items-center mx-auto w-full max-w-4xl my-5'>
          <Link 
            className="flex items-center text-gray-700 hover:text-gray-600  cursor-pointer"
            href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p className="pl-2 leading-none text-xl dark:hover:text-gray-400">Back</p>
          </Link>

          <h1 className='text-xl text-gray-700 font-bold'>Resumen del pedido</h1>
      </div>
    </>
  )
}
