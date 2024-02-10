import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar"
import  Providers  from "@/app/Provder";
import Searchbox from "@/Components/Searchbox";


export const metadata: Metadata = {
  title: "IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows",
  description: "Ratings, Reviews, and Where to Watch the Best Movies & TV Shows",
};

export default function RootLayout({
  children,
}: Readonly<
{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body> 
        <Providers>
        <div>
       <Navbar />
       <div className="lg:hidden md:hidden inline mt-6 pt-4 mx-auto pl-12 max-w-6xl">
       <Searchbox />
       </div>
        {children}
        </div>
         </Providers> 
        </body>
        
    </html>
  );
}
