import { titleFont } from "@/config/fonts";
import Link from "next/link";
import Image from "next/image";

export function PageNotFound() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row h-[650px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
          <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
          <p className="font-semibold text-xl">Ups! Lo sentimos mucho</p>
          <p className="font-light">
            <span>Puedes regresar a</span>
            <Link
              href='/admin/products'
              className="font-semibold hover:underline transition-all text-amber-500"
            > Productos </Link>
          </p>
        </div>

        <div className="px-5 mx-5">
          <Image
            src="/imgs/starman.png"
            alt="Starman"
            className="p-5 sm:p-0"
            width={550}
            height={550}
          />
        </div>
      </div>
    </>
  )
}
