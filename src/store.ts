import {create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';

interface Store {
  order : OrderItem[] //array que almacena los productos del pedido
  addToOrder : (product : Product) => void
  incrementQuantity : (id : Product['id']) => void
  decrementQuantity : (id : Product['id']) => void
  deleteOrder : (id : Product['id']) => void
}

//set: Función para actualizar el estado
//get: Función para obtener el estado actual
export const useStore = create<Store>((set, get) => ({ 
  order : [],
  addToOrder : (product) => {
    //se elimina la propiedad categoryId del producto / data contiene el resto del producto
    const {categoryId, ...data} = product;
    var order :OrderItem[] = []
    //si el producto ya existe en el pedido
    if(get().order.find(item => item.id === data.id)){
      //si existe, actualizamos la cantidad y el subtotal
      order = get().order.map( item => item.id === data.id ? {
        ...item,
        //actualizamos la cantidad y el subtotal
        quantity : item.quantity + 1,
        subTotal : (item.quantity + 1) * product.price
      }: item)
    }else{
      order = [...get().order, {
        //toma una copia de data
        ...data,
        quantity : 1,
        subTotal : 1 * product.price,
      }]
    }

    //actualizamos el estado del pedido
    set(() => ({
      order
    }))
  },
  incrementQuantity : (id) => {
    set((state) => ({
      //iteramos el pedido y si el id coincide, actualizamos la cantidad y el subtotal
      order : state.order.map(item => item.id === id ? {
        ...item,
        quantity : item.quantity + 1,
        subTotal : (item.quantity + 1) * item.price
      }: item)
    }))
  },
  decrementQuantity : (id) => {
    set((state) => ({
      order : state.order.map(item => item.id === id ? {
        ...item,
        quantity : item.quantity - 1,
        subTotal : (item.quantity -1) * item.price
      } : item)
    }))
  },
  deleteOrder : (id) => {
    set((state) => ({
      order : state.order.filter(item => item.id !== id)
    }))
  }
}))