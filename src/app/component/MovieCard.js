import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {
    const{id,type,title,synopsis} = curElem.jawSummary;

  return (
    <>
    <div className='card'>
        <div className='image_portion'>
            <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200} />
        </div>
        <div className='card_detail'>
            <h2>{title}</h2>
            <p>{synopsis}</p>
            <Link href={`/movie/${id}`}>
                <button>Read more</button>
            </Link>
        </div>
    </div>
    </>
    
  )
}

export default MovieCard