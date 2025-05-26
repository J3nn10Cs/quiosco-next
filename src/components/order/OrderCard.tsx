import { completeOrder } from "@/actions/complete-order-action"
import { formatCurrency } from "@/helpers/currency"
import { OrderWithProducts } from "@/types"

interface Props {
  order : OrderWithProducts
}

export default function OrderCard({ order } : Props) {
  
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 flex flex-col h-full"
    >
      <div className="space-y-4">
        <p className='text-2xl font-extrabold text-gray-900'>Cliente: {order.name}</p>
        
        <dl className="mt-6 space-y-4">
          {
            order.orderProducts.map(product => (
              <div key={product.id}>
                <dt className="text-base font-medium text-gray-900">{product.product.name}</dt>
                <dd className="mt-1 text-sm text-gray-500">{product.quantity} x {formatCurrency(product.product.price)}</dd>
              </div>
            ))
          }
          
        </dl>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Total a Pagar:</dt>
          <dd className="text-base font-bold text-green-700">{formatCurrency(order.total)}</dd>
        </div>
        <form action={completeOrder}>

          <input
            type="hidden"
            name="orderId"
            value={order.id}
          />

          <input
            type="submit"
            className="rounded-lg transition-all duration-700 bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            value='Marcar Orden Completada'
          />
        </form>
      </div>
    </section>
  )
}