import { titleFont } from "@/config/fonts"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface Props {
  category : Category
}

export function CategoryIcon({category} : Props) {
  return (
    <div className="flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b">
      <Link
        className="flex items-center gap-4"
        href={`/order/${category.slug}`}
      >
        <Image
          width={64}
          height={6}
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen ${category.name}`}
        />

        <h1 className={`${titleFont.className}`}>{category.name}</h1>
      </Link>
    </div>
  )
}
