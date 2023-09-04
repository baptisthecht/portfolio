import React from 'react'
import Header from '../components/Header';
import Works from '../components/Works';
import SayHi from '../components/SayHi';
import Layout from '../components/Layout/Layout';
export default function HomePage() {

  return (
    <Layout>
        <Header />
        <Works />
        <SayHi />
    </Layout>
  )
}



