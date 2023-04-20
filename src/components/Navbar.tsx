import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const [navbarTranslate, setNavbarTranslate] = useState(false)

  useEffect(() => {
    setNavbarTranslate(true)
  })

  return (
    <header
      className={`relative flex w-full justify-between p-4 font-semibold transition-transform duration-700 ${
        navbarTranslate ? '' : '-translate-y-full'
      }`}
    >
      <a href='/'>Michał Rymut</a>

      <nav className='hidden space-x-7 sm:block'>
     
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  )
}
