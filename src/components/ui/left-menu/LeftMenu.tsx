import {prisma} from '@/lib/prisma'
import { CategoryIcon } from '../category-icon/CategoryIcon'
import { Logo } from '../logo/Logo'

async function getCategories() {
  return await prisma.category.findMany()
}

export async function LeftMenu() {
  const categories = await getCategories()

  return (
    <aside className="md:w-72 md:h-screen bg-white animate__animated animate__fadeIn">
      <Logo/>
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
