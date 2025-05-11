import { ProductWithCategory } from "@/app/admin/products/page"
import { formatCurrency, getImagePath } from "@/helpers/currency"
import { EyeIcon, PencilIcon, TrashIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  products: ProductWithCategory
}

export default function ProductTable({ products }: Props) {

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-6">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-200">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    PRODUCTO
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    PRECIO
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    CATEGORÍA
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                        <Image
                          width={100}
                          height={100}
                          src={getImagePath(product.image)}
                          alt={`Imagen de ${product.name}`}
                          className="w-full bg-cover rounded-full h-full mx-auto"
                        />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {product.category.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex justify-center space-x-3 ">
                        <button className="text-gray-500 hover:text-blue-700">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <Link
                          href={`/admin/products/${product.id}/edit`} 
                          className="text-gray-500 hover:text-green-700">
                          <PencilIcon className="h-5 w-5" />
                        </Link>
                        <button className="text-gray-500 hover:text-red-500">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}