'use client'
import React, { useMemo } from 'react'
import { useStore } from '@/store';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { FullCart } from '@/components/cart/FullCart';
import { OrderSumary } from '@/components';
import { AmountPayment } from '@/components/order/AmountPayment';

export default function CartPage() {

  const order = useStore(state => state.order);
  const total = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order]);

  return (
    <>
      {order.length === 0 ? 
        <>
          <EmptyCart/>
        </> : 
        <>
          <div className='w-full max-w-4xl mx-auto mt-5 animate__animated animate__fadeIn'>
            <FullCart/>

            <div className='flex gap-4'>
              <div>
                {order.map(order => (
                  <>
                    <OrderSumary
                      key={order.id}
                      item={order}
                    />
                  </>
                ))}
              </div>

              <AmountPayment
                order={order}
                total={total}
              />
            </div>
          </div>
        </>
      }
    </>
  )
}
