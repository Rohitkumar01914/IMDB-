'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Searchbox() {
    const router = useRouter();
    let [searchQuery, setSearchQuery] = useState<string>(""); 

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        if(searchQuery.trim()===" "){
        router.push('/')
      }
        
      router.push(`/search/${searchQuery}`);

      setSearchQuery(" ")
    }
  
  return (
    <form className="flex items-center dark:bg-gray-300 bg-white text-gray-700 rounded-md" onSubmit={handleClick}>
            <IoIosSearch size={30} className="text-black cursor-pointer " />
            <input
                className="outline-none pl-2 h-8 rounded-r-md md:w-72 lg:w-[45vw] dark:bg-gray-300"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your favourite movie..."
            />
        </form>
  )
}
