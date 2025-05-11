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

export const SearchSchema = z.object({
  search : z.string()
    //eliminar espacios al inicio y al final
    .trim()
    .min(1, { message: 'La busqueda no puede ir vacia'})
})

//validamos el formulario de productos
export const ProductSchema = z.object({
  name : z.string()
    .trim()
    .min(1, { message: 'El nombre es obligatorio'}),
  price : z.string()
    .trim()
    .transform((val) => parseFloat(val))
    .or(z.number())
    .refine((val) => val > 0 , { message: 'El precio debe ser mayor a 0'}),
  categoryId : z.string()
    .trim()
    .transform((val) => parseInt(val))
    .or(z.number())
    .refine((val) => val > 0, { message: 'La categoria no es valida'}),
  image : z.string()
    .min(1, { message: 'La imagen es obligatoria'})

})