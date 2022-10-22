import Newmovie from "./component/Movielist/Newmovie";
import Popular from "./component/Movielist/Popular";
import Upcoming from "./component/Movielist/Upcoming";   
import Toprated from "./component/Movielist/Topreted";
import Trailer from "./component/Movielist/Trailer";
// import Letesmovis from "./component/Movielist/Letesmovis";
import Navbar from './component/Header/Navbar';
import Movielist from "./component/Movielist/Movielist";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nowplaying from "./component/Movielist/Nowplaying";
export default function App() {
  return (
    <>
      <div className="container-flude">
        <Router>
          <Navbar />
          <div className="row">
            <div className="col-md-2 mt-5"> 
            <div className="position-fixed mt-5">       
              <ul className=" "><Link to="/movielist"> Movielist </Link></ul>
              <ul className=" "><Link to="/popular"> Popular </Link></ul>
              <ul className=" "><Link to="/toprated"> Toprated </Link></ul>
              <ul><Link to="/newmovie"> New Movie</Link></ul> 
              {/* <ul><Link to="/latestmovis">Latestmovis</Link></ul> */}
              <ul><Link to="/upcoming"> upcoming</Link></ul>
              <ul><Link to="/nowplaying"> Now Playing</Link></ul>
            </div>
            </div> 
            <div className="col-md-10 mt-5" >
              <Routes>
                <Route path="/popular" element={<Popular />}></Route>
                <Route path="/movielist" element={<Movielist />}></Route>
                <Route path="/toprated" element={<Toprated />}></Route>
                <Route path="/newmovie" element={<Newmovie />}></Route>
                <Route path="/upcoming" element={<Upcoming />}></Route>
                <Route path="/nowplaying" element={<Nowplaying />}></Route>
                <Route path="/viewtrialer/:id" element={<Trailer />}></Route>
                {/* <Route path="/latestmovis" element={<Latestmovis />}></Route> */}
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  )
}

//https://api.themoviedb.org/3/movie/{  }/videos?api_key=74bc96b35cbf1507c9a31f5009ffba1b&language=en-US