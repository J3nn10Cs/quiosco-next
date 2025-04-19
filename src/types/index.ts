import { Order, OrderProduct, Product } from "@prisma/client";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price' | 'image'> & {
  quantity: number
  subTotal: number 
}

// This type is used to represent the order with the products included
export type OrderWithProducts = Order & {
  orderProducts : (OrderProduct & {
    product : Product
  })[]
}