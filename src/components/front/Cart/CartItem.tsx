import React from 'react';
import style from './Cart.module.css';

const CartItem = ({ item, RemoveProduct, addProduct }: any) => {
  return (
    <div key={item.id} className={style.CartItem}>
      <img className={style.image} src={item.img} alt={item.name} />
      <div className={style.name}>{item.name}</div>
      <div className={style.functions}>
        <button className={style.remove} onClick={() => RemoveProduct(item)}>
          -
        </button>
        <button className={style.add} onClick={() => addProduct(item)}>
          +
        </button>
      </div>
      <div className={style.quantity}>
        <h3>
          {item.quantity}*{item.price}
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
