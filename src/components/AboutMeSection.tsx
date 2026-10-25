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
          Cześć, nazywam się Michał, <br />
          Jestem Inżynierem Mechaniki i Budowy Maszyn.
        </h1>
        <p className='mt-10'>
          Jako inżynier Mechaniki i Budowy Maszyn specjalizuję się w projektowaniu, konstruowaniu oraz optymalizacji rozwiązań technicznych. W swojej pracy używam takich narzędzi jak Autodesk Inventor, SolidWorks oraz AutoCAD, 
          tworząc dokumentację techniczną i usprawniając procesy projektowe oraz produkcyjne. Doświadczenie zdobywałem najpierw jako konstruktor fasad a następnie jako konstuktor R&D w obszarze laserów femtosekundowych, 
          gdzie rozwijałem umiejętności projektowania i wdrażania zaawansowanych rozwiązań technicznych. Obecnie pracuję jako technolog w Mennicy Polskiej, koncentrując się na doskonaleniu procesów produkcyjnych, ich efektywności 
          oraz jakości. Cenię analityczne podejście do rozwiązywania problemów, precyzję i współpracę zespołową. Nieustannie rozwijam swoje kompetencje, poszukując nowych możliwości oraz wyzwań.
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
