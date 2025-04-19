'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export const completeOrder = async (formData : FormData) => {
  try {
    //obtenemos el valor del id de la orden
    const orderId = formData.get('orderId')!;

    //validamos que el id sea un numero y pasamos lo que vamos a actualizar
    await prisma.order.update({
      where : {
        id : +orderId,
      },
      data : {
        status : true,
        orderReadyAt : new Date(Date.now()),
      }
    })

    //hacemos un revalidate de la ruta para que se actualice la vista
    revalidatePath('/admin/orders');

  } catch (error) {
    console.log(error);
  }
}