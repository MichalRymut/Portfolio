import React, { useState } from 'react'
import useInterval from '../hooks/useInterval'

const Footer = () => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)

  return (
    <footer
      id='contact'
      className={`group mt-4 flex space-x-4 delay-1000 duration-[1500ms] ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative box-border flex w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-tr from-amber-100 to-cyan-200 p-10'>
        <h2 className='text-4xl font-semibold'>Want to work together?</h2>
        <p className='mt-4'>
          Dziękuję za odwiedzenie mojego portfolio! Jeśli zainteresowało cię moje doświadczenie lub projekty i uważasz, że mółbym być cenną częścią twojego zespołu,
          to zapraszam do kontaktu, aby porozmawiać o możliwościach współpracy.
        </p>
        <div className='mt-auto flex'>
          <p className='mt-4'>
            <i className='fa-regular fa-envelope mr-1'></i>mich.rymut@gmail.com <br/>
            <i className='fa-solid fa-phone'></i>+48 728542683
       
          </p>
         
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
