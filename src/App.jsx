import "./App.css";
import Header from "./Components/Header/header.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay.jsx";
import ProductDescription from "./Components/ProductDescription/ProductDescription.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-100">

        <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductDisplay />} />
          <Route path="/products/:id" element={<ProductDescription />} />
        </Routes>
        <Profile/>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
