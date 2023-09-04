import React from 'react'
import { useDarkMode } from '../../DarkModeContext';
import { useState, useEffect } from 'react';
import NavBarComponent from '../NavBarComponent';
import Footer from '../Footer';

export default function Layout({children}) {

    const { darkMode } = useDarkMode();
    const [pageBg, setPageBg] = useState('')
  
  
    useEffect(() => {
      setPageBg( darkMode ? '#0A0A0D' : '#FFF')
    }, [darkMode])

  return (
    <div style={{background: pageBg}}>
        <div className='backgroundgradient'> 
            <div className='flex flex-col items-center'>
            <div className="py-[32px]">
                <NavBarComponent />
            </div>
            {children}
            <Footer />
        </div>
    </div>
  </div>
  )
}
