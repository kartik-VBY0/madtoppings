import React, { useState } from 'react'
import MenuList from "../helpers/MenuList";
import AddIcon from '@mui/icons-material/Add';
import "../styles/Menu.css";
import RemoveIcon from '@mui/icons-material/Remove';

function Item(props) {
  const [value,changeval]=useState(0);

  function increase(){
    changeval(value+1);
  }
  function decrease(){
    if(value>0)
    changeval(value-1);
  else
    changeval(0);
  }
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${props.img})`}}>             
        </div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      
            <div id="buttons">
            <button onClick={increase}><AddIcon/></button>
            <p id="value">{value}</p>
            <button onClick={decrease}><RemoveIcon/></button>
            </div>
        
    </div>
  )
}

export default Item;
