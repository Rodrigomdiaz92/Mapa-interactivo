import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterCustom from "@/components/layout/FooterCustom";
import NavbarCustom from "@/components/layout/NavBarCustom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "San blas - Sailing The World ",
  description: "Charter a boat in San Blas, Panama. Explore the San Blas Islands and enjoy the Caribbean Sea. Book your sailing adventure today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased min-h-screen`}
    >
      <body className="min-h-screen flex flex-col">
         <NavbarCustom />
         <main className="flex-1 w-full pt-1">{children}</main>        
        <FooterCustom /> 
        
      </body>
    </html>
  );
}
