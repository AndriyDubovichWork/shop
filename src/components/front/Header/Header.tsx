import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import shopingCart from './../imgs/shopping_cart.svg';

interface IHeader {
  cartItems: any;
  cartItemsNum: number;
}

const Header = ({ cartItems, cartItemsNum }: IHeader) => {
  return (
    <header className={style.header}>
      <Link to='/shop' className={style.home}>
        Online Shop
      </Link>
      <div className={style.rigthheader}>
        <Link to='/shop/cart' className={style.cart}>
          <img src={shopingCart} />
        </Link>
        <h1 className={style.cartNumber}>{cartItemsNum}</h1>
      </div>
    </header>
  );
};

export default Header;
