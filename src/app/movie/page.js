import Link from 'next/link'
import React from 'react'
import MovieCard from '../component/MovieCard';

const page = async () => {
  
  // await new Promise(executor:resolve => setTimeout(resolve:timeout,2000))

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '32b83fb2c7msha31c763a54a6481p12a283jsncfd44877a769',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const response = await fetch(url, options);
	const result = await response.json();
  const main_data = result.titles
	console.log(main_data.jawsummary);
  return (

    <>
    <div className=''>
      <div className=''>
        <h1>Series & Movie</h1>
        {
          main_data.map((curElem) =>{
            return(
              <MovieCard key={curElem.id} {...curElem}/>
            )
          })
        }
      </div>
    </div>
    
    </>
  )
}

export default page