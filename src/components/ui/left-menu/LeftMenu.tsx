import {prisma} from '@/lib/prisma'
import { CategoryIcon } from '../category-icon/CategoryIcon'
import Image from 'next/image'
import Link from 'next/link'

async function getCategories() {
  return await prisma.category.findMany()
}

export async function LeftMenu() {
  const categories = await getCategories()
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <div className='flex justify-center mt-5'>
        <Link
          href="/"
        >
          <Image
            width={160}
            height={104}
            src="/logo.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="mt-10">
        {categories.map(category => (
          <CategoryIcon
            category={category}
            key={category.id}
          />
        ))}
      </nav>
    </aside>
  )
}
