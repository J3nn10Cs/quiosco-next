import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";
import 'animate.css';
import ToastNotification from "@/components/ui/toast/ToastNotification";

export const metadata: Metadata = {
  title: "Quiosco",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastNotification/>
      </body>
    </html>
  );
}
