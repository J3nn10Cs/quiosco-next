import { LeftMenu, TopMenu } from "@/components";

export default function RootLayout({children }: Readonly<{ children: React.ReactNode}>) {
  // Inyectamos el children
  return (
    <>
      <main className="md:flex">
        <LeftMenu/>

        <div className="md:flex-1 md:h-screen md:overflow-y-scroll">
          <TopMenu/>
          {children}
        </div>
      
      </main>
      

    </>
  )
}