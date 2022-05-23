import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ChooseLocation from '../ChooseLocation/ChooseLocation';
import Products from '../Products/Products';
import SingUp from '../SingUp/SingUp';
import style from './main.module.css';
interface IMain {
  data: any;
  cartItems: any[];
  addProduct: Function;
  RemoveProduct: Function;
  ClearCart: Function;
}

const Main = ({
  data,
  cartItems,
  addProduct,
  RemoveProduct,
  ClearCart,
}: IMain) => {
  return (
    <div className={style.Content}>
      <Routes>
        <Route
          path='/shop'
          element={<Products addProduct={addProduct} data={data} />}
        />
        <Route path='/location' element={<ChooseLocation />} />

        <Route path='/shop/singup' element={<SingUp />} />

        <Route
          path='/shop/cart'
          element={
            <Cart
              cartItems={cartItems}
              addProduct={addProduct}
              RemoveProduct={RemoveProduct}
              ClearCart={ClearCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
