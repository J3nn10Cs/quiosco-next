import {prisma} from '@/lib/prisma'
import { CategoryIcon } from '../category-icon/CategoryIcon'
import Link from 'next/link'

async function getCategories() {
  return await prisma.category.findMany()
}

export async function LeftMenu() {
  const categories = await getCategories()

  return (
    <aside className="md:w-72 md:h-screen bg-white animate__animated animate__fadeIn">
      <div className='flex justify-center mt-5'>
        <Link
          href="/"
        >
          <img 
            src="/logo.svg"
            alt="Logo"
            className='w-40'
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
