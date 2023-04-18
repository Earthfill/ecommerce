import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <img src='/800_5f2db5cf10e66.jpg' className='home--image'/>
      <div className='home--image--overlay'>
        <p className="home--text">Fashion & Clothing Store</p>
        <p className="home--subtext">Extraordinary Collections</p>
      </div>
    </div>
  )
}

export default Home