import React from 'react';

const Search =(props)=>{
    return(
    <div className="search-bar">
                <h4>Movies-Kids</h4>
                <input type="text"  placeholder="tape a name" onChange={(e)=>{props.search(e.target.value)} }/>
                <input type="number" placeholder="tape a rate" onChange={(e)=>{props.search(e.target.value)}}/> 
                </div>
    )
}
export default Search;