import Layout from '../components/Layout/Layout.jsx';
import { useDarkMode } from "../DarkModeContext";
import { useState, useEffect } from 'react';

export default function Soon() {

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
              WebkitTextFillColor: 'transparent'}}>Psst... Not so fast!</h1>
              <p className='text-[18px] w-[455px] text-center   ' style={{color: fontColor}}>My portfolio is not already done... See my works on the homepage or on my GitHub profile!</p>
            <img src="Decorative Bar.png" alt="bar" />
        </div>
        <div className='h-[800px]'></div>
    </Layout>
  )
}
