'use client'
import { titleFont } from "@/config/fonts"
import { useStore } from "@/store"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"


export function TopMenu() {

  const order = useStore(state => state.order)

  return (
    <div className="animate__animated animate__fadeIn sticky top-0 z-10 flex justify-between items-center p-4 mb-4 bg-white shadow-md">
      <h1 className={`${titleFont.className} font-bold text-3xl`}> Elige y personaliza tu pedido </h1>
      <Link href='/cart' className='mx-2'> 
        <div className='relative'>
          <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
            {order.length}
          </span>
          <IoCartOutline className='w-5 h-5'/>
        </div>
      </Link>
    </div>
  )
}
