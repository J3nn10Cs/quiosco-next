import { createOrder } from '@/actions/create-order-action'
import { formatCurrency } from '@/helpers/currency'
import { OrderSchema } from '@/schema'
import { useStore } from '@/store'
import { OrderItem } from '@/types'
import React from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface Props {
  total: number,
  order : OrderItem[]
}

export const AmountPayment = ({total, order} : Props) => {
  const router = useRouter();
  const clearOrder = useStore(state => state.clearOrder);

  const handleCreateOrder = async (formData : FormData) => {
    //almacenamos el nombre del cliente, la orden en un objeto y el total
    const data = {
      name : formData.get('name'),
      total,
      order
    }

    //validamos el esquema de datos del cliente
    const result = OrderSchema.safeParse(data);
    console.log(result)
    if(!result.success){
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }

    //si el esquema es correcto, creamos la orden desde el servidor
    const response = await createOrder(data);
    if(response?.errors){
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }

    toast.success('Preparando pedido')
    //limpiamos el pedido
    clearOrder()
    //redireccionamos a la pagina de inicio - o detalle del pedido
    router.push('/');
  }

  return (
    <>
      <div className='bg-gray-200 shadow-md mb-2 rounded-xl p-5 w-2/3 flex flex-col'>
        <h1 className='font-bold text-2xl'>Monto a pagar</h1>

        {order.map(item => (
          <div key={item.id} className='flex justify-between items-center mt-4'>
            <p className='text-lg font-semibold'>{item.name}</p>
            <div className='flex gap-2 items-center'>
              <p className='text-lg font-semibold'>{`(${item.quantity})`} x</p>
              <p className='text-lg font-semibold'>{formatCurrency(item.price * item.quantity)}</p>
            </div>
          </div>
        ))}
        
        <div className='mt-auto border-t border-gray-300 pt-4 flex justify-between items-center'>
          <p className='text-xl font-bold'>Total</p>
          <p className='text-xl font-bold text-green-600'>{formatCurrency(total)}</p>
        </div>
        <form action={handleCreateOrder}>
          <input 
            type="text"
            className='border border-gray-300 rounded-3xl p-2 mt-5 w-full'
            placeholder='Nombre del cliente'
            name='name'
          />

          <input 
            type="submit"
            className='bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 w-full rounded-3xl mt-5 cursor-pointer'
            value="Confirmar pedido"
          />
        </form>
      </div>
    </>
  )
}
