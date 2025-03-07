import "./App.css";
import Header from "./Components/Header/header.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import PersonalInformation from "./Components/Profile/PersonalInformation.jsx";


function App() {
  return (
    <>
      <div className="bg-gray-100">

        <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>}/>

        </Routes>
        <Profile/>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
