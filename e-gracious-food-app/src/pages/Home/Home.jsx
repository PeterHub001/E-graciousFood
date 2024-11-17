import React, { useState } from 'react'
import './Home.css'
import Header from '../../Views/Header/Header'
import ExploreMenu from '../../Views/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Views/FoodDisplay/FoodDisplay'
import AppDownload from '../../Views/AppDownload/AppDownload'

const Home = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
       <Header />
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}  setCategory={setCategory}/> 
       <AppDownload/>  
   </div>
  )
}

export default Home
