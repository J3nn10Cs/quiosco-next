import  OrderCard  from '@/components/order/OrderCard';
import { Heading } from '@/components/ui/heading/Heading'
import { prisma } from '@/lib/prisma';
import React from 'react'

async function getOrders() {

  const orders = await prisma.order.findMany({
    where : {
      //traer solo las que tienen el status de false
      status : false
    },
    //para traer los productos
    include : {
      orderProducts : {
        include : {
          product : true
        }
      }
    }
  })

  return orders
}

export default async function page() {

  const orders = await getOrders();
  
  return (
    <>
      <Heading>
        Administrar las ordenes
      </Heading>

      {
        orders.length === 0 ?
        <div className='mt-10 animate__animated animate__fadeIn'>
          <h1 className='text-2xl font-bold text-center'>No hay ordenes pendientes</h1>
        </div> 
        :
        <div className='mt-10 animate__animated animate__fadeIn'>
          <h1 className='text-2xl font-bold text-center'>Ordenes pendientes</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
            {orders.map(order => (
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
