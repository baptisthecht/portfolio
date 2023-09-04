import Layout from '../components/Layout/Layout.jsx';
import { useDarkMode } from "../DarkModeContext";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {

    const { darkMode } = useDarkMode();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        setFontColor( darkMode ? '#FFFFFF' : '#0A0A0D')
      }, [darkMode])

  return (
    <Layout>
        <div className="h-auto w-[700px] flex flex-col items-center gap-[12px] p-[24px]">
            <h1 to="/timeline" className='text-[32px] font-bold' style={{ background: 'var(--gradients-retro-2, linear-gradient(90deg, #DC36FA 0%, #A167EF 25%, #609FE4 50%, #3ABFDE 75%, #04D18E 100%))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'}}>Timeline</h1>
              <p className='text-[18px] w-[455px] text-center   ' style={{color: fontColor}}>The linear view of some milestones and notable moments that happened so far. Check other stuff on twitter or linkedin</p>
            <img src="Decorative Bar.png" alt="bar" />
        </div>
        <div className='flex flex-row gap-[16px]'>
            <Link><img className="h-[36px]" src="ButtonTwitter.png" alt="" /></Link>
            <Link><img className="h-[36px]" src="ButtonLinkedin.png" alt="" /></Link>
            <Link><img className="h-[36px]" src="ButtonInstagram.png" alt="" /></Link>
        </div>
        <div className='h-[800px]'></div>
    </Layout>
  )
}
