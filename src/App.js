import React,{useState} from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header'; 

export  const App =()=>{
  const [Movies, setMovies]=useState([{id:1,url:"https://img.discogs.com/F_MUVHkqRp49OQh_WKcArZ3nJCE=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1724965-1311442953.jpeg.jpg",
  title:"Charlotte's Web",description:"Charlotte's Web is a 2006 American fantasy-comedy film based on the 1952 novel of the same name by E. B. White.",
  rate:5},
  {id:2,url:"https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-q12ugh_dfd54a6e.jpeg?region=0%2C0%2C640%2C320",
  title:"Finding Nemo",description:"Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios. "
  ,rate:3},
  {id:3,url:"https://www.geekgeneration.fr/wp-content/uploads/2019/09/La-Reine-des-Neiges-2-Frozen-2-1.jpg",
  title:"Frozen",description:"Frozen is a  American 3D computer-animated musical fantasy film produced by Walt Disney Animation Studios."
,rate:1}]
)
const[Words,setWords]=useState("");
const searchT=(z)=>{
  setWords(z)
}
const[Rates,setRates]=useState("");
const searchR=(z)=>{
  setRates(z)
}

const add=(z)=>{
  console.log(z)
  setMovies([...Movies,z])
  console.log(Movies)
}

  return( <div>
    <Header searchT={searchT} searchR={searchR} Rates={Rates} Words={Words}/>
    <Main Movieslist={Movies} Rates={Rates}  Words={Words}  add={add}/> 
  
    </div>)
}
export default App;
