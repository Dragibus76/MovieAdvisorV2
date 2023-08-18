import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Tv from "./pages/Tv/Tv";
import MediaDetailsPage from "./pages/MediaDetailsPage/MediaDetailsPage";

function App() {
  return (
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/films/*" element={<Movie/>}/>
    <Route path="/series/*" element={<Tv/>}/>
    <Route path="/details/:mediaType/:mediaId" element={<MediaDetailsPage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
