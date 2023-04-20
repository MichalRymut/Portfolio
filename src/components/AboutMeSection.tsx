import React, { useEffect, useState } from 'react'
import { technologies } from '../data'
import useInterval from '../hooks/useInterval'
import { TechnologyBagde } from './ProjectTechnologiesSection'

const AboutMeSection = () => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)

  return (
    <section
      id='about-me'
      className={`space-y group flex flex-col space-y-4 delay-300 duration-[1500ms] md:flex-row md:space-x-4 md:space-y-0 ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative box-border flex flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-10 md:w-2/3'>
        <h1 className='text-5xl font-semibold'>
          Hello, I'm Michał, <br />
          Software Developer
        </h1>
        <p className='mt-10'>
          With skills in Python, SQL, Visual Basic, C++, CSS, and React, I have a passion for creating efficient and effective software solutions that 
          solve complex problems. I enjoy collaborating with a team to design, develop and maintain software applications that meet the needs of end-users.
          I am skilled in writing reliable, and scalable code, and I enjoy testing and debugging to ensure that the software works as intended. 
          I am always looking for opportunities to learn and improve my skills and abilities.
        </p>
        <div className='relative mt-10 flex flex-col space-y-4 md:mt-auto md:flex-row md:space-x-3 md:space-y-0'>
            <a
              href={require('../assets/CV - Michał Rymut.pdf')}
              download
               className='mt-10 rounded-full bg-black py-3 px-8 text-white transition-colors hover:bg-gray-800'
            >
              <i className='fa-solid fa-file'></i> Get my CV
            </a>
        </div>
      </div>
      <div className='rounded-3xl border bg-slate-100 object-cover p-5 md:max-h-fit md:w-1/3'>
        <ul className='flex flex-wrap py-2'>
          {Object.values(technologies).map((technology) => (
            <TechnologyBagde technology={technology} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutMeSection
