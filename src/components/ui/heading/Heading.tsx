import { geistMono } from "@/config/fonts";

export function Heading({children}: {children: React.ReactNode}) {
  return(
    <>
      <h1 className={`${geistMono.className} font-bold text-2xl`}>
        {children}
      </h1>
    </>
  )
}