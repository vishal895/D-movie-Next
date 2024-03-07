import Image from 'next/image';
import React from 'react'

const page = async({params}) => {
  const id = params.id
  
  const url=`https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '32b83fb2c7msha31c763a54a6481p12a283jsncfd44877a769',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div className=''>
     <h2 className='text-center text-blue-700 text-3xl'>Netflix\ <span>{main_data.type}</span></h2>
     <div className='bg-white p-5  w-[800px] shadow-2xl box-shadow  text-left rounded-[5px] mx-auto mt-9'>
      <div className='image_portion'>
        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={800} height={300}/>
      </div>
      <h1 className='text-lg font-bold'>{main_data.title}</h1>
      <p>{main_data.synopsis}</p>
     </div>
    </div>
  )
}

export default page