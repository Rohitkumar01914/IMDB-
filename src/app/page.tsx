'use client'
import Results from "@/Components/Results";
import React, { useEffect, useState } from "react";

interface MovieResult {
     original_title: string;
    backdrop_path:string;
    poster_path:string
    price:number;
    vote_count:number;
    id:number;
    release_date:string
    vote_average:number
    name:string;
    overview:string;

}

interface ResultsProps {
  results: MovieResult[];
}

let apikey =process.env.NEXT_PUBLIC_API_apikey

export default function Home() {
  const [results, setResults] = useState<MovieResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(results)

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
