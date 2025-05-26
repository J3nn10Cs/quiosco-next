import { OrderWithProducts } from '@/types'
import React from 'react'

interface Props {
  order : OrderWithProducts
}

export default function LatestOrderItem({ order }: Props) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-5'>
      <p className='text-lg font-bold text-slate-600'>Cliente : {order.name}</p>
      <ul
        className='divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500'
        role='list'
      >
        {order.orderProducts.map( product => (
          <li
            key={product.id}
            className='flex justify-between py-3'
          >
            <p>
              <span className='font-bold'>({product.quantity}) {''}</span>
              {product.product.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
