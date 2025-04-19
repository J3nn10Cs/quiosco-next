"use client";

import { titleFont } from "@/config/fonts"
import { Category } from "@prisma/client"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Props {
  category : Category
}

export function CategoryIcon({category} : Props) {
  const params = useParams<{slug : string}>()

  return (
    <Link 
      className={`${category.slug.toString() === params.slug ? 'bg-amber-400 transition-all duration-500 ease-in-out' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
      href={`/product/${category.slug}`}
    >
      <div
        className="flex items-center gap-4"
      >
        <img 
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen ${category.name}`}
          className="w-28 h-12"
        />

        <h1 className={`${titleFont.className}`}>{category.name}</h1>
      </div>
    </Link>
  )
}
