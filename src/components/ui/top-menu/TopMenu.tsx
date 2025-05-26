'use client'
import { useStore } from "@/store"
import Link from "next/link"
import { IoCartOutline, IoMoonOutline } from "react-icons/io5"
import { Heading } from "../heading/Heading"
import { geistMono } from "@/config/fonts"

export function TopMenu() {

  const order = useStore(state => state.order)

  return (
    <div className={`animate__animated animate__fadeIn sticky top-0 z-10 flex justify-between items-center p-4 mb-4 bg-white shadow-md`}>
      <Heading>
        Elige y personaliza tu pedido
      </Heading>
      <div className="flex items-center gap-4">
        <button>
          <IoMoonOutline className='w-5 h-5'/>
        </button>
        <Link href='/cart' className='mx-2'> 
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
              {order.length}
            </span>
            <IoCartOutline className='w-5 h-5'/>
          </div>
        </Link>
      </div>
    </div>
  )
}
