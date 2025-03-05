import { LeftMenu, OrderSumary } from "@/components";


export default function RootLayout({children }: Readonly<{ children: React.ReactNode}>) {
  // Inyectamos el children
  return (
    <>
      <main className="md:flex">
        <LeftMenu/>

        <div className="md:flex-1 md:h-screen md:overflow-y-scroll">
          {children}
        </div>

      </main>
    </>
  )
}