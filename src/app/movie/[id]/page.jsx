'use client'

// ./src/app/movie/[id]/page.jsx
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Using useParams from "next/navigation"

export default function Page() {
  const [movie, setMovie] = useState({});
  const { id } = useParams(); // Using useParams

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_apikey}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className='w-full' key={movie.id}>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className='rounded-lg'
            style={{ maxWidth: '100%', height: '100%' }}
            alt="image"
          ></Image>
          <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold'>{movie.title}</h2>
            <p className='text-lg mb-3'>{movie.overview}</p>
            <p className='mb-3'>
              <span className='font-semibold mr-1'>Date Released:</span>
              {movie.release_date}
            </p>
            <p className='mb-3'>
              <span className='font-semibold mr-1'>Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
