import React from 'react'
import { ProductPagination } from '@/components/product/ProductPagination';
import ProductTable from '@/components/product/ProductTable';
import { Heading } from '@/components/ui/heading/Heading'
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ProductSearch } from '@/components/product/ProductSearch';

async function productCount () {
  return await prisma.product.count();
}

const getProducts = async (page : number, pageSize : number) => {

  //vamos a saltar cierto numero de productos para mostrar los siguientes
  //si estamos en pg 1, mostramos desde el 1 hasta el 10:D
  const skip = (page - 1) * pageSize;

  const product = await prisma.product.findMany({
    take : pageSize,
    skip,
    include : {
      category : true,
    }
  });

  return product;
}

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>

//usamos seacrhParams para obtener la paginaacion
export default async function ProductsPage({searchParams} : {searchParams : {page : number}}) {

  //si no existe la pagina se pone en 1
  const page = +searchParams.page || 1;
  //numero de productos por pagina
  const pageSize = 10;

  if(page < 0) redirect('/admin/products')

  const productsData =  getProducts(page, pageSize);
  const totalProductsData =  productCount();

  //si tenemos consultas independintes
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);

  //vamos a redondear para arriba
  const totalPages = Math.ceil(totalProducts / pageSize);
  if(page > totalPages) redirect('/admin/products')
  
  return (
    <>
      <Heading>
        Administrar los productos
      </Heading>

      <div className='flex justify-between items-center mt-5'>
        <Link
          className='bg-amber-400 p-2 rounded-xl text-white font-bold hover:bg-yellow-500 transition-all duration-300'
          href={'/admin/products/new'}
        >
          Crear Producto
        </Link>
        <ProductSearch/>
      </div>


      <ProductTable
        products={products}
      />
      
      <ProductPagination page={page} totalPages={totalPages}/>
    </>
  )
}
