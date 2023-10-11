import React from 'react'
import { useState, useEffect } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { Link } from 'react-router-dom';

export default function ProjectCard({path, name, desc, link}) {

    const { darkMode } = useDarkMode();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        setFontColor( darkMode ? '#FFFFFF' : '#0A0A0D')
      }, [darkMode])

  return (
    <Link to={link} className={darkMode ? 'cardhoverdark flex flex-col items-start gap-[8px] rounded-[16px] p-[12px] pb-[16px] w-[220px] h-auto cursor-pointer' : 'cardhoverlight flex flex-col items-start gap-[8px] rounded-[16px] p-[12px] pb-[16px] w-auto h-auto cursor-pointer'}>
        <img style={{ borderRadius: '18px'}} src={process.env.PUBLIC_URL + path} alt="" className='w-[200px] h-[200px]'/>
        <div>
            <p className='text-base font-bold font-[16px]' style={{color: fontColor}}>{name}</p>
            <p className='font-normal leading-tight text-[15px] opacity-60' style={{color: fontColor}}>{desc}</p>
        </div>
    </Link>
  )
}
