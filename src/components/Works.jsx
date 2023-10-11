import React from 'react'
import ProjectCard from './ProjectCard'
import { useEffect, useState } from "react";
import { useDarkMode } from "../DarkModeContext";

export default function Works() {

    const { darkMode } = useDarkMode();
    const [secondaryColor, setSecondaryColor] = useState('')

    useEffect(() => {
        setSecondaryColor( darkMode ? 'rgba(114, 120, 136, 0.6)' : 'rgba(74, 87, 111, 0.7)')
      }, [darkMode])

  return (
    <div className='pt-[60px] inline-flex p-[16px] flex-col align-start gap-[16px]'>
        <p style={{ color: secondaryColor}} className='py-8 pl-3 font-[14px] font-bold tracking-[3px]'>FEATURED PROJECTS</p>
        <div className='grid grid-cols-3 gap-[14px] mx-auto'>
            <ProjectCard name="Portfolio" path="/Work/image 792.png" desc="This website · Made with ReactJS (NodeJS) and tailwind" link='/'/>
            <ProjectCard name="Roma Roma" path="/Work/romaroma.png" desc="Interactive menu · Made with ReactJS (NodeJS) and tailwind" link='https://client-roma-roma.vercel.app/'/>
            <ProjectCard name="Garage Parrot" path="/Work/garage.png" desc="Commercial website · Made with PHP/Symfony and Bootstrap" link='https://bit.ly/garage-parrot'/>

        </div>
    </div>
  )
}
