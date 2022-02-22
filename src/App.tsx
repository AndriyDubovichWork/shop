import React, { useState } from 'react';
import style from './App.module.css';

import Header from './components/front/Header/Header';
import Main from './components/front/Main/Main';

import { Provider } from 'react-redux';

import data from './components/back/data/data';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems]: any[] = useState([]);
  const cartItemsNum = cartItems.length;

  const addProduct = (product: any) => {
    const ProductExist = cartItems.find((item: any) => {
      return item.id === product.id;
    });

    if (ProductExist) {
      setCartItems(
        cartItems.map((item: any) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const RemoveProduct = (product: any) => {
    const ProductExist = cartItems.find((item: any) => {
      return item.id === product.id;
    });
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item: any) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item: any) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const ClearCart = (): void => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <div className={style.main}>
        <Header cartItems={cartItems} cartItemsNum={cartItemsNum} />
        <Main
          data={data}
          cartItems={cartItems}
          addProduct={addProduct}
          RemoveProduct={RemoveProduct}
          ClearCart={ClearCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
