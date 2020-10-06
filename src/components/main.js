import React from 'react';
import MovieCard from './MovieCard';
 export const Main =(props)=>{
return(
    <div>
        < MovieCard  Movieslist={props.Movieslist} Rates={props.Rates}  Words={props.Words} add={props.add} />
    </div>
)
 }
 export default Main;