import React, { useState } from 'react'
import './Home.css'
import Header from '../../Views/Header/Header'
import Beans from '../../Views/Header/Header'
import ExploreMenu from '../../Views/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Views/FoodDisplay/FoodDisplay'

const Home = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
       <Header />
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
