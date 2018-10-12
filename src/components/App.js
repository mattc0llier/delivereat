import React from 'react';
import MenuItem from './MenuItem.js';
import Basket from './Basket.js';

import '../styles/App.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = { menu: {}, currentOrder: [], }

    this.receiveBeerQuantity = this.receiveBeerQuantity.bind(this)
  }

  componentDidMount(){
    fetch("/delivereat")
    .then(response => response.json())
    .then(menu => {
      this.setState({
        menu: menu
      })
    })
  }

  receiveBeerQuantity(beer, newBeerQuantity){
    //if quantity more than 0 then add object to array
    // if 0 then filter current state and set new filtered state as current order
    // if beer.menuItemId exists then filter out and add new one.

    console.log('newBeer', beer);
    console.log('quantity', newBeerQuantity);

    if(newBeerQuantity > 0){
      console.log('more than zero');
      console.log('what is the result', this.state.currentOrder.menuItemId);

      const beerOrder = {
        [beer.id]: {
        menuItemId: beer.id,
        menuItemName: beer.name,
        quantity: newBeerQuantity
      }
    }
      const updatedOrder = Object.assign({}, this.state.currentOrder, beerOrder)

      this.setState({
        currentOrder: updatedOrder
      },
      () => console.log(this.state.currentOrder))
    } else {
      delete this.state.currentOrder[beer.id]
      console.log(this.state.currentOrder);
    }


  }

  render(){
    const menuArr = Object.values(this.state.menu)

    return (
      <div>
        <header>
          <h1>Liquid dinner</h1>
        </header>
        <main>
          <div className="basket">
            <h1>Your Basket</h1>
            <Basket />
          </div>
          <h2>Beers</h2>
          {menuArr.map(beer => (
            <div key={beer.id}>
              <MenuItem beer={beer} receiveBeerQuantity={this.receiveBeerQuantity}/>
            </div>
          ))}
        </main>



      </div>
    )
  }
}

export default App;
