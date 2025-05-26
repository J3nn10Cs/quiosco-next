import { prisma } from "@/lib/prisma"

export async function GET() {
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
  
  //retornar la respuesta en formato json swr
  return Response.json(orders);
}