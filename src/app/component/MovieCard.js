import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {
    const{id,type,title,synopsis} = curElem.jawSummary;

  return (
    <>
    <div className='bg-white p-5  w-[300px] shadow-2xl box-shadow  text-left rounded-[5px] '>
        <div className='image_portion'>
            <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={280} height={200} objectFit='cover' />
        </div>
        <div className='card_detail'>
            <h2>{title}</h2>
            <p>{synopsis}</p>
            <Link href={`/movie/${id}`}>
                <button className='inline-flex  text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600  text-lg rounded-full mt-2'>Read more</button>
            </Link>
        </div>
    </div>
    </>
    
  )
}

export default MovieCard