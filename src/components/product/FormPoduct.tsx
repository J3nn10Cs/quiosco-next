import { prisma } from "@/lib/prisma"
import ImageUpload from "../images/ImageUpload";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function FormPoduct() {
  
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

      <ImageUpload/>
    </>
  )
}
