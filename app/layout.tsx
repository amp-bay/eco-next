import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "CHOP LIFE",
  description: "Get your Chinese Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar/>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}      
        </main>
        <Footer/>
        
      </body>
    </html>
  );
}
