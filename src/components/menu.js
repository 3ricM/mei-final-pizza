import React from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import Pepperoni from './pepperoni';
import MeatLover from './meat-lover';
import Veggie from './veggie';
import Hawaiian from './hawaiian';
import Bbq from './bbq';
import './css/menu.css';


function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice 
        img = {plain}
        title = "Plain Slice" 
        description = "It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?" 
        price = "$1.00"  />

        <Pepperoni 
        img = {Pepperoni}
        title = "Pepperoni Slice" 
        description = "A classic slice with cheese, sauce, and guess what else... that's right, pepperoni."
        price = "$1.00"  />

        <MeatLover 
        img = {MeatLover}
        title = "Meat Lover's Slice" 
        description = "Pepperoni not enough meat for you? Well this slice has pepperoni, meatballs, and susage."
        price = "$1.00"  />

        <Veggie 
        img = {Veggie}
        title = "Veggie Slice" 
        description = "You trying to be healthy but you still can't resist pizza? Well then the veggie slice is for you! This is guilt-free pizza at its finest."
        price = "$1.00"  />

        <Hawaiian
        img = {Hawaiian}
        title = "Hawaiian Slice" 
        description = "We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price = "$1.00"  />

        <Bbq
        img = {Bbq}
        title = "BBQ Slice" 
        description = "Perhaps the most popular slice we offer. BBQ Chicken over a delicious dollar pizza. What more could one want in life?"
        price = "$1.00"  />

      </div>
    </div>
  );
}

export default Menu;
