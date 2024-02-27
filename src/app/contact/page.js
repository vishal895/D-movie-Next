import React from 'react'
import ContectCard from '../component/ContectCard'
import ContactForm from '../component/ContactForm'

const page = () => {
  return (
    <><div>
      <h1 className='text-black font-bold text-3xl mb-5 text-center'>Contact Us</h1>
<ContectCard />
    </div>
    <div className='mt-10'>
      <h1 className='text-black font-bold text-3xl mb-5 text-center'>We'd love to hear from you</h1>
    <ContactForm/>
    </div>
    
    </>
  )
}

export default page