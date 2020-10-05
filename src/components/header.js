import React from 'react';
import Search from './filter';

const Header =(props)=>{
    return(<>
    <Search search={props.search}/>
    </>
    )
}
export default Header;