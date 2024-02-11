import Image from "next/image";
import Link from "next/link";

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

const Card: React.FC<ResultsProps> = ({ results })=> {
  return (
    <div className="card1 ">
    {results.map((result, index) => (
      <div className="border-2 p-2 rounded-lg bg-white dark:bg-gray-100 hover:opacity-75 delay-75 cursor-pointer active:opacity-20" key={index}>
<Link href={`/movie/${result.id}`}>
        <Image 
        height={900}
        className="group-hover:opacity-50 shadow-md rounded-md mb-2"
        width={900}
        priority
        src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path} ||""`} alt="Comming soon"/>
        <div className="flex justify-between pl-3 pr-3 text-gray-500">
        <p className="text-sm">{result.release_date ||'15-03-2004'}</p>
        <p>Ratings: {(result.vote_average).toFixed(1)}⭐</p>
        </div>
<div className="dark:text-gray-800 p-2 ">
    <h1 className="text-center font-bold  ">
  { result.original_title||result.name }</h1>
    <p className="line-clamp-2">{result.overview}</p>
<div className="flex justify-between pt-6 relative bottom-0">
     <button className="hover:text-amber-500">Know more...</button>

     <p className="hover:text-amber-500">{(result.vote_count)+40} 👍</p>
</div>
   
</div>

    </Link>
          </div>
    ))}
  </div>
  
  )
}


export default Card;