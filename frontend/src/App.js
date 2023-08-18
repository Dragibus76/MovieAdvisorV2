import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Tv from "./pages/Tv/Tv";

function App() {
  return (
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/films/*" element={<Movie/>}/>
    <Route path="/series/*" element={<Tv/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
