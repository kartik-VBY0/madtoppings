import React from 'react'
import MenuList from "../helpers/MenuList";
import "../styles/Menu.css";
function Item(props) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${props.img})`}}>             
        </div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  )
}

export default Item;
