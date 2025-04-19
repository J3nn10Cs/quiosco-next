"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  link : {
    url : string,
    text : string,
    blank : boolean
  }
}

export const AdminRoute = ({link} : Props) => {

  const pathname = usePathname()
  //inicia con
  const isActive = pathname.startsWith(link.url)
  console.log(isActive)
  return (
    <>
      <Link
        href={link.url}
        className={`${isActive ? 'transition-all duration-500 ease-in-out bg-amber-400' : ''} font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b text-center`}
      >
        {link.text}
      </Link>
    </>
  )
}
