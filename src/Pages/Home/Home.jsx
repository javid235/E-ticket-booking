import React from 'react'
import './Home.css'
import HeroSearch from '../../Components/HeroSearch/HeroSearch'
import TopEvents from '../../Components/TopEvents/TopEvents'
import PopularCat from '../../Components/PopularCat/PopularCat'

const Home = () => {
  return (
    <>
      <HeroSearch />
      <PopularCat />
      <TopEvents />
    </>
  )
}

export default Home
