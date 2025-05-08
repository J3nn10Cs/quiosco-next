import Link from "next/link"

interface Props {
  page : number
  totalPages : number
}

export const ProductPagination = ({page, totalPages} : Props) => {

  const pages = Array.from({length : totalPages}, (_, i) => i + 1);

  return (
    <>
      <nav className="flex justify-center items-center mt-4">
        {page > 1 && (
          <Link
            href={`/admin/products?page=${page - 1}`}
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          >
            &laquo;
          </Link>
        )}

        {pages.map(p => (
          <Link
            href={`/admin/products?page=${p}`}
            key={p}
            className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${page === p ? ' font-bold from-yellow-500 to-yellow-400 text-white shadow-yellow-500' : ''}  p-0 text-sm  shadow-md  transition duration-150 ease-in-out`}
          >
            {p}
          </Link>
        ))}

        {page < totalPages && (
          <Link
            href={`/admin/products?page=${page + 1}`}
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          >
            &raquo;
          </Link>
        )}
      </nav>
    </>
  )
}
