import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Dashboard
      </a>
      <a className="menu-item" href="/salads">
        MyWater
      </a>
      <a className="menu-item" href="/pizzas">
        Statistics
      </a>
      <a className="menu-item" href="/desserts">
        Reminders
      </a>
    </Menu>
  );
};