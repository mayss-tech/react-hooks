import React,{useState} from 'react';
import Star from './components/star';
import './App.css';
import Main from './components/main';
import Header from './components/header'; 

export  const App =(props)=>{
  const [Movies, setMovies]=useState([{id:1,url:"https://img.discogs.com/F_MUVHkqRp49OQh_WKcArZ3nJCE=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1724965-1311442953.jpeg.jpg",
  title:"Charlotte's Web",description:"Charlotte's Web is a 2006 American fantasy-comedy film based on the 1952 novel of the same name by E. B. White.",
  rate:<Star/>}]
//   {id:2,url:"https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-q12ugh_dfd54a6e.jpeg?region=0%2C0%2C640%2C320",
//   title:"Finding Nemo",description:"Finding Nemo est le cinquième film d'animation en images de synthèse des studios Pixar."
//   ,rate:<Star/>},
//   {id:3,url:"https://www.geekgeneration.fr/wp-content/uploads/2019/09/La-Reine-des-Neiges-2-Frozen-2-1.jpg",
//   title:"Frozen",description:"Frozen est le 128e long-métrage d'animation et le 53e « Classique d'animation » des studios Disney."
// ,rate:<Star/>}
)


const[Words,setWords]=useState("");
const search=(z)=>{
  setWords(z)
}


const add=(z)=>{
  console.log(z)
  setMovies(...Movies,z)
}

  return( <div>
    <Header search={search} Words={Words}  />
    <Main Movieslist={Movies}  Words={Words}  add={add} /> 
  
    </div>)
}

export default App;
