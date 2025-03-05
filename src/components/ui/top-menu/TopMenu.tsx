import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

export function TopMenu() {
  return (
    <div className="flex justify-between items-center m-4">
      <h1 className={`${titleFont.className} font-bold text-3xl`}> Elige y personaliza tu pedido </h1>
      <Link href='/products' className='mx-2'> 
        <div className='relative'>
          <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
            3
          </span>
          <IoCartOutline className='w-5 h-5'/>
        </div>
      </Link>
    </div>
  )
}
