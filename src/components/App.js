import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import { useState } from 'react';
import Categories from './Categories';

function App() {
  const [cart, updateCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  return (
      <div>
          <Banner>
              <img src={logo} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />
              <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
              <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          </div>
          <Footer />
      </div>
  )
}

export default App