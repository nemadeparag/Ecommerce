import './App.css'
import Header from './Components/Header/header.jsx'
import MainCategory from './Components/Home/MainCategory.jsx'
import Carousal from './Components/Home/Carousal.jsx'
import CategoryItem from './Components/Home/CategoryItem.jsx'
import BestdealsSmartphones from './Components/Home/BestdealsSmartphones.jsx'
import SpecialDis3Banner from './Components/Home/SpecialDis3Banner.jsx'
import MultiProduct3Card from './Components/Home/MultiProduct3Card.jsx'

function App() {

  return (
    <>
    <div className='bg-gray-100'>
    <Header/>
    <MainCategory/>
    <Carousal/>
    <CategoryItem/>
    <BestdealsSmartphones/>
    <SpecialDis3Banner/>
    <MultiProduct3Card/>
    </div>
      
    </>
  )
}

export default App
