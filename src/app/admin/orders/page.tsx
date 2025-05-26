'use client'
import useSWR from 'swr'
import  OrderCard  from '@/components/order/OrderCard';
import { Heading } from '@/components/ui/heading/Heading'
import React from 'react'
import { OrderWithProducts } from '@/types';

export default function page() {

  const url = '/admin/orders/api';
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  })

  if (isLoading) return 'Cargando...';

  if (data) return (
    <>
      <Heading>
        Administrar las ordenes
      </Heading>

      {
        data.length === 0 ?
        <div className='mt-10 animate__animated animate__fadeIn'>
          <h1 className='text-2xl font-bold text-center'>No hay ordenes pendientes</h1>
        </div> 
        :
        <div className='mt-10 animate__animated animate__fadeIn'>
          <h1 className='text-2xl font-bold text-center my-5'>Ordenes pendientes</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
            {data.map(order => (
              <OrderCard
                key={order.id}
                order={order}
              />
            ))}
          </div>
        </div>
      }
    </>
  )
}
