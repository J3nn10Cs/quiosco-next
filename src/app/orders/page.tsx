'use client'
import { Logo } from '@/components/ui/logo/Logo'
import { geistMono } from '@/config/fonts'
import useSWR from 'swr'
import React from 'react'
import { OrderWithProducts } from '@/types';
import LatestOrderItem from '@/components/order/LatestOrderItem';

export default function OrdersPage() {

  const url = '/orders/api';
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  })

  if(isLoading) return 'Cargando...';

  if (data) return (
    <>
      <h1 className={`${geistMono.className} text-center mt-20 text-6xl font-black`}>Ordenes listas</h1>

      <Logo/>

      {data.length ? (
        <>
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 max-w-5xl mx-auto'>
            {data.map(order => (
              <LatestOrderItem
                key={order.id}
                order={order}
              />
            ))}
          </div>
        </>
      ) : (
        <>
        
        </>
      )}
    </>
  )
}
