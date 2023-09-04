import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDarkMode } from "../DarkModeContext";

export default function Header() {
    const { darkMode } = useDarkMode();
    const [avatarPath, setAvatarPath] = useState('')
    const [fontColor, setFontColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')

    useEffect(() => {
        setAvatarPath( darkMode ? 'Hexagon.png' : 'Avatar.png')
        setFontColor( darkMode ? '#FFFFFF' : '#0A0A0D')
        setSecondaryColor( darkMode ? 'rgba(114, 120, 136, 0.6)' : 'rgba(74, 87, 111, 0.7)')
      }, [darkMode])

  return (
    <div id="header" className=' inline-flex p-[16px] flex-col align-start gap-[16px] w-[708px]'>
        <div id="frame" className='flex pb-0 items-center gap-[15px] mb-[15px]'>
          <img src={process.env.PUBLIC_URL + avatarPath} alt="" />
          <div id="title">
            <h1 style={{fontFamily: 'Bai Jamjuree', color: fontColor}} className="font-bold text-[25px]">baptist hecht</h1>
            <Link to="https://github.com/baptisthecht" id="git" className='inline-flex items-center gap-[4px]'>
                <h1 style={{color: secondaryColor}}  className='text-base font-semibold'>baptisthecht</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.66488 4C5.29669 4 4.99821 4.29848 4.99821 4.66667C4.99821 5.03485 5.29669 5.33333 5.66488 5.33333V4ZM12.3315 4.66667H12.9982C12.9982 4.29848 12.6997 4 12.3315 4V4.66667ZM11.6649 11.3333C11.6649 11.7015 11.9634 12 12.3315 12C12.6997 12 12.9982 11.7015 12.9982 11.3333H11.6649ZM4.52681 11.5286C4.26645 11.7889 4.26645 12.2111 4.52681 12.4714C4.78716 12.7318 5.20927 12.7318 5.46961 12.4714L4.52681 11.5286ZM5.66488 5.33333H12.3315V4H5.66488V5.33333ZM11.6649 4.66667V11.3333H12.9982V4.66667H11.6649ZM11.8601 4.19527L4.52681 11.5286L5.46961 12.4714L12.8029 5.13807L11.8601 4.19527Z" fill={secondaryColor} fill-opacity="0.6"/>
                </svg>
            </Link>
          </div>
        </div>
        <p style={{letterSpacing: '-0.34px', color: fontColor}} className='text-xl font-normal my-[16px] leading-8'>Aspiring web developer with a passion for design and the metaverse. I'm eager to learn and create innovative experiences for users.</p>
        <div id="current" className='flex items-start gap-[7px]'>
        <span style={{color: secondaryColor}} className='text-lg font-medium'>Built with love during</span>
        <Link to="/timeline" className='text-lg font-medium' style={{ background: 'var(--gradients-retro-2, linear-gradient(90deg, #4AB1F1 0%, #566CEC 32.81%, #D749AF 65.63%, #FF7C51 100%))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'}}>@studi</Link>
        <span style={{color: secondaryColor}} className='text-lg font-medium'>formation</span>
        </div>

          {
            darkMode ?
            <div className='flex opacity-30 mt-[50px] flex-inline flex-row items-end gap-[54px]'>
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/figma-darkmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/adobe-darkmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/nodejs-darkmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/tw-darkmode.png"} alt="" />
            </div>
            :
            <div className='flex opacity-30 mt-[50px] flex-inline flex-row items-end gap-[54px]'>
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/figma-lightmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/adobe-lightmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/nodejs-lightmode.png"} alt="" />
            <img className="h-[26px]" src={process.env.PUBLIC_URL + "/bw/tw-lightmode.png"} alt="" />
            </div>
          }
      </div>
  )
}
