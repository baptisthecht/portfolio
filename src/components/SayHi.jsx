import React from 'react'
import { useDarkMode } from '../DarkModeContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SayHi() {

    const { darkMode } = useDarkMode();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        setFontColor( darkMode ? '#FFFFFF' : '#0A0A0D')
      }, [darkMode])

  return (
    <div className={darkMode ? 'sayhidark w-[678px] h-[339px] flex flex-col justify-center p-[40px] py-[50px] h-auto rounded-[20px] my-[80px]' : 'sayhilight w-[678px] h-[339px] flex flex-col justify-center p-[40px] py-[50px] h-auto rounded-[20px] my-[80px]'}>
        <div className='w-[314px] h-[229px] flex flex-row items-center gap-[24px]'>
            <div className='flex flex-col gap-7'>
                <div className=''>
                    <span className='text-sm font-medium' style={{ background: 'var(--gradients-retro-2, linear-gradient(90deg, #4AB1F1 0%, #566CEC 32.81%, #D749AF 65.63%, #FF7C51 100%))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'}}></span>
                    <span className='text-[44px] font-bold' style={{ background: 'var(--gradients-retro-2, linear-gradient(90deg, #F06844 0%, #EE4C54 20%, #D45E95 40%, #9C6CA6 60%, #6583C1 80%))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'}}>Say hi!</span>
                    <h2 className='w-[314px] h-[96px] font-medium text-[21px] tracking-tight leading-8 mt-2' style={{color: fontColor}}>Want to create something awesome? Or, you have any query? Drop an email or a tweet.</h2>
                </div>
                <div className='flex flex-row gap-[39px]'>
                    <Link to='https://www.twitter.com'><img src="tweet.png" alt="tweet" className='h-[34px]' /></Link>
                    <Link to='mailto:me@baptisthecht.fr'><img src="mail.png" alt="mail" className='h-[34px]'/></Link>
                </div>
               </div>
            <img src="conversation.png" className="w-[275px] h-[275px] relative left-[20px] top-[10px]" alt="" />
        </div>
    </div>
  )
}
