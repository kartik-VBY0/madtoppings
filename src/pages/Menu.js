import React from 'react';
import MenuList from "../helpers/MenuList";
import Item from "../components/Item";
import '../styles/Menu.css';
function Menuitems(items){
    return (
        <Item
        img={items.image}
        name={items.name}
        price={items.price}
        />
    );
}

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map(Menuitems)}
      </div>
    </div>
  )
}

export default Menu;
