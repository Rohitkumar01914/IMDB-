'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Results from "@/Components/Results"

let apikey =process.env.NEXT_PUBLIC_API_apikey

export default function Search() {
    const [results, setResults] = useState([]);
    const paramvlaue = useParams().searchTerm;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${paramvlaue}&language=en-US&page=1&include_adult=false`
                );
                const data = await res.json();
                const results = data.results;
                setResults(results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [paramvlaue]);
    return (
        <>
          <Results results={results}/>
        </>
    );
}
