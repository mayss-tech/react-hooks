
import React,{useState} from 'react';
import  {useEffect} from 'react';



export const MovieCard =(props)=>{

    const [Title, setTitle]=useState("");
    const [Url, setUrl]=useState("");
    const [Description, setDescription]=useState("");
    const [Rate, setRate]=useState("");
    const [movieCard, setMovie]=useState(props.Movieslist)
     useEffect(() => {
        setMovie(props.Movieslist);
     },[props.Movieslist]);
        
return  (<div> <div className="block0">
{movieCard.filter(el=>el.title.toUpperCase().includes(props.Words.toUpperCase())).map(el=><div key={el.id} className="block1">
    <img src={el.url} alt=""/>
<h5>{el.title}</h5>
<p>{el.description}</p>
<p>{el.rate}</p>
</div>   ) } </div>


<div className="card">
<input type="text" placeholder="Url" onChange={(e)=>{setUrl(e.target.value)}}/>
<input type="text"  placeholder="Title"onChange={(e)=>{setTitle(e.target.value)}}/>
<input type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
<input type="number"  placeholder="Rate" onChange={(e)=>{setRate(e.target.value)}}/>
<div className="btn">
<button onClick={()=>props.add({url:Url,title:Title,description:Description,rate:Rate} )}>Add</button>
</div> 
</div>

</div>)
    
    
} 
export default MovieCard;