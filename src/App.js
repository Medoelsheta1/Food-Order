import Meals from './Components/Meals/Meals'
import './App.css';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart'
import { useState } from 'react';
import CartProvider from './Components/Context/CartProvider'
function App() {
  const [visible , setVisible] = useState(false)
  const visibleTheCart = () => {
    setVisible(true)
  }
  const invisibleTheCart = () => {
    setVisible(false)
  }
  return (
    <CartProvider>
      <div className="App">
        <div className='content'>

          <Header onClick={visibleTheCart}/>
          { visible ? <Cart onClick={invisibleTheCart}/> : null}
          
          <Meals />        
        </div>

      </div>      
    </CartProvider>
    
  );
}

export default App;
