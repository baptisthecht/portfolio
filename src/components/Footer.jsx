import React from 'react'
import { useState, useEffect } from 'react'
import { useDarkMode } from '../DarkModeContext'
import { Link } from 'react-router-dom';

export default function Footer() {

    const darkMode = useDarkMode();

    const [secondaryColor, setSecondaryColor] = useState('')

    useEffect(() => {
        setSecondaryColor( darkMode ? 'rgba(114, 120, 136, 0.6)' : 'rgba(74, 87, 111, 0.7)')
      }, [darkMode])

  return (
    <div className='flex flex-col gap-[120px] py-[60px] px-[128px]'>
        <div>
            <div className='flex justify-center gap-3 mb-2'>
                <span className="text-lg" style={{color: secondaryColor}}>©baahct</span>
                <span className="text-lg" style={{color: secondaryColor, opacity: "50%"}}>✦</span>
                <span className="text-lg" style={{color: secondaryColor}}>baptist hecht</span>
            </div>
            <div className='flex justify-center gap-8'>
                <Link className="text-md" style={{color: secondaryColor}}>git</Link>
                <Link className="text-md" style={{color: secondaryColor}}>about</Link>
                <Link className="text-md" style={{color: secondaryColor}}>work</Link>
                <Link className="text-md" style={{color: secondaryColor}}>timeline</Link>
                <Link className="text-md" style={{color: secondaryColor}}>more</Link>
            </div>
        </div>
        {
            darkMode
            ?
            <img src="Quotedark.png" alt="quote" className='h-[18px]' />
            :
            <img src="quote.png" alt="quote" className='h-[18px]' />
        }
    </div>
  )
}
