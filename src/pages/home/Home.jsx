import React, { useState } from 'react';
import '../home/Home.css';
import Header from '../../component/header/Header';
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../component/fooddisplay/FoodDisplay';
import AppDownload from '../../component/Appdownload/AppDownload';

function Home() {

  const [category, setCategory] = useState('All');


  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload/>
      </div>
    </>
  )
}

export default Home