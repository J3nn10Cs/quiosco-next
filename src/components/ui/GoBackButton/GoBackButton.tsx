"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const GoBackButton = () => {

  const router = useRouter();

  return (
    <>
      <button
        className='bg-amber-400 py-2 px-7 rounded-xl text-white font-bold hover:bg-yellow-500 transition-all duration-300 mt-3'
        onClick={() => router.back()}
      >
        Volver
      </button>
    </>
  )
}
