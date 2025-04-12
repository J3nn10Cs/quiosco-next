import {z} from 'zod';

//esto es lo que esperamos recibir en el formulario de pedido
export const OrderSchema = z.object({
  name : z.string()
    .min(1, { message: 'El nombre es obligatorio'}),
  total : z.number()
    .min(1, { message: 'Hay errores en la orden'}),
  order : z.array(z.object({
    id : z.number(),
    name : z.string(),
    price : z.number(),
    quantity : z.number(),
    subTotal : z.number()
  }))
})