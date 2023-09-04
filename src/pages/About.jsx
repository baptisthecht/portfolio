import Layout from '../components/Layout/Layout.jsx';
import { useDarkMode } from "../DarkModeContext";
import { useState, useEffect } from 'react';

export default function About() {

    const { darkMode } = useDarkMode();
    const [fontColor, setFontColor] = useState('')
    useEffect(() => {
        setFontColor( darkMode ? '#FFFFFF' : '#0A0A0D')
      }, [darkMode])

  return (
    <Layout>
        <h1 style={{color: fontColor}}>test</h1>
        <div style={{color: fontColor}} className='h-[1000px]'>about page // todo</div>
    </Layout>
  )
}
