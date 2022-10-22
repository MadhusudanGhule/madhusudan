import axios from "axios";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
export default function Upcoming(){
    const [newmovie,setnewmovie]=useState([])

    const getnewmovie= async () => {
        var result = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=74bc96b35cbf1507c9a31f5009ffba1b&language=en-US&page=1');
        setnewmovie(result.data.results);
    }
    useEffect( () => {
        getnewmovie()
    },[]);
    return(
        <>
            <div className="containar">
            <div className="row">
                {newmovie.map((val)=>{
                    return(
                        <>
                     <div className="col-md-3">
                      <div className="card mt-4">
                       <div className="card-header">
                         <img src={`http://image.tmdb.org/t/p/w500/${val.backdrop_path}`} className="w-100"/>
                       </div>
                          <div className="card-body text-center">
                            <h6>{val.original_title}</h6>
                            <Link to={`/viewtrialer/${val.id}`}><button id="trailer">trailer</button></Link><br/>
                            <span>Rating : {val.vote_average}</span>
                         </div>
                        </div>
                      </div>
                        </>
                    )
                })}
            </div>

            </div>
        </>
    )
}