import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

//funcion encargada de ingresar los datos
async function main() {
  try {
    //crear multiples registros
    await prisma.category.createMany({
      data : categories
    })

    await prisma.product.createMany({
      data : products
    })
  } catch (error) {
    console.log(error)
  }
}

//si todo sale bien
main()
  .then(async () => {
    //si todo sale bien esperamos a que prima se desconecte
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })