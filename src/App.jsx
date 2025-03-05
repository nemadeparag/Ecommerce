import { useState } from 'react'

import './App.css'
import Header from './Components/Header/header.jsx'
import MainCategory from './Components/Home/MainCategory.jsx'
import Carousal from './Components/Home/Carousal.jsx'
import CategoryItem from './Components/Home/CategoryItem.jsx'

function App() {

  return (
    <>

    <Header/>
    <MainCategory/>
    <Carousal/>
    <CategoryItem/>
      
    </>
  )
}

export default App
