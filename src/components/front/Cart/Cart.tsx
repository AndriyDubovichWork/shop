import React from 'react';
import style from './Cart.module.css';
import CartItem from './CartItem';

interface ICart {
  cartItems: any[];
  addProduct: Function;
  RemoveProduct: Function;
  ClearCart: Function;
}
const Cart = ({ cartItems, addProduct, RemoveProduct, ClearCart }: ICart) => {
  const TotalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className={style.cart}>
      <h1 className={style.header}>Cart</h1>

      {cartItems.length === 0 ? (
        <h1 className={style.Empty}>Cart is empty</h1>
      ) : (
        <div className={style.clearCartDiv}>
          <button onClick={() => ClearCart()} className={style.clearCart}>
            Clear cart
          </button>
        </div>
      )}

      <div>
        {cartItems.map((item) => {
          return (
            <CartItem
              item={item}
              addProduct={addProduct}
              RemoveProduct={RemoveProduct}
            />
          );
        })}
        <div className={style.TotalPrice}>
          <h1>Total Price:</h1>
          <h1>{TotalPrice}$</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
