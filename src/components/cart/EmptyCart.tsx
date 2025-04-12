import React from 'react'
import Link from 'next/link'

export const EmptyCart = () => {
  return (
    <>
      <Link 
        className="mt-5 mx-auto w-full max-w-4xl flex items-center text-gray-700 hover:text-gray-600  cursor-pointer animate__animated animate__fadeIn"
        href="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
        <p className="pl-2 leading-none text-xl dark:hover:text-gray-400">Back</p>
      </Link>
      <h1 className='text-2xl text-gray-700 text-center mt-5 font-bold'>El carrito está vacío</h1>
    </>
  )
}
