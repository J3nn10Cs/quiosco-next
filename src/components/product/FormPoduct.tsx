import { prisma } from "@/lib/prisma"
import ImageUpload from "../images/ImageUpload";
import { Product } from "@prisma/client";

async function getCategories() {
  return await prisma.category.findMany();
}

interface Props {
  product?: Product
}

export default async function FormPoduct({product} : Props) {
  
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="name"
        >Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100 rounded-lg"
          placeholder="Nombre Producto"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="price"
        >Precio:</label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-slate-100 rounded-lg"
          placeholder="Precio Producto"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="categoryId"
        >Categoría:</label>
        <select
          className="block w-full p-3 bg-slate-100 rounded-lg"
          id="categoryId"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="" disabled>-- Seleccione --</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <ImageUpload
        image={product?.image}
      />
    </>
  )
}
