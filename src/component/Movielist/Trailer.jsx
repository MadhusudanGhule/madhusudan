import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ReactDOM } from "react";

export default function Trailer()
{
    const[trailer,settrailer]=useState([]);
    let {id} = useParams();
    const getnewmovie=async()=>{
        var result= await axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=74bc96b35cbf1507c9a31f5009ffba1b&language=en-US`);
        settrailer(result.data.results[0].key);
        console.log(trailer);
    }
    useEffect(()=>{
    getnewmovie();
    })
    return (
        <>

<iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )

}