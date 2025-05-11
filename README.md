# 🚀 Quiosco con Next.Js

Proyecto de un sistema de pedidos tipo quiosco desarrollado con Next.js y Prisma, utilizando tecnologías modernas para el desarrollo web.


## 🌐 Tecnologías Utilizadas

- Framework Principal: Next.js
- Base de Datos: Prisma + PostgreSQL
- Lenguaje: TypeScript
- Estilos: Tailwind CSS

---

## ⚙️ Configuración Inicial

### 1️⃣ Configurar Variables de Entorno
- Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
```env
  DATABASE_URL= tu_url
```

```env
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= tu_cloud_name
```

```env
  NEXT_PUBLIC_CLOUDINARY_API_KEY= tu_api_key
```

```env
  CLOUDINARY_API_SECRET= tu_api_secred
```

### 2️⃣ Instalar Dependencias

Ejecuta los siguientes comandos

```sh
  npm install
```

---

## ▶️ Ejecución del Proyecto

🖥️ Servidor de Desarrollo
```sh
npm run dev
```

🛠️ Migraciones y Datos
```sh
npx prisma migrate dev
```

🌱 Cargar Datos de Ejemplo
```sh
npx prisma db seed
```

🔍 Prisma Studio
```sh
npx prisma studio
```
