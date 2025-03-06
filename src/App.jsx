import "./App.css";
import Header from "./Components/Header/header.jsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";


function App() {
  return (
    <>
      <div className="bg-gray-100">

        <BrowserRouter>
        <Header />
        <Routes>

        <Route path="/" element={<Home/>}/>


        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
