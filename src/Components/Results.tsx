import React from 'react';
import Card from './Card';

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
const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
     <Card results={results} />
    </div>
  );
};

export default Results;
