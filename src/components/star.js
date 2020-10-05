import React, {useState}  from 'react';
import {FaStar} from 'react-icons/fa';

function Star(){
    const [rating, setRating]=useState(null);
    return(
        <>
        {[...Array(5)].map((x,y)=>{ const ratingValue=y+1; 
        
            return <label key={Math.random()}><input 
            type="radio" 
            name="rating" 
            value={ratingValue} className="rate" 
            onClick={()=>setRating(ratingValue)}></input>
            <FaStar className="starcolor" color={ratingValue <= rating?"#3d83df":"#747474"}/> 
        </label> }
            ) }

        </>
    )
}
export default Star;