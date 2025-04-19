import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <>
      <div className='flex justify-center mt-5'>
        <Link
            href="/"
            className='relative w-40 h-40'
          >
            <Image
              fill
              src="/logo.svg"
              alt="Logo"
            />
        </Link>
      </div>
    </>
  )
}
