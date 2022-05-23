import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChooseLocation from '../ChooseLocation/ChooseLocation';
import PayPal from '../PayPal/PayPal';
import style from './Cart.module.css';
import CartItem from './CartItem';

interface ICart {
  cartItems: any[];
  addProduct: Function;
  RemoveProduct: Function;
  ClearCart: Function;
}
const Cart = ({ cartItems, addProduct, RemoveProduct, ClearCart }: ICart) => {
  let TotalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const realCoupones = ['kaktus', 'brawlStars', '50%', 'happy', '999'];
  let IsCouponeRigth = false;
  let ResultPrice = TotalPrice;

  const [CouponInp, setCouponInp] = useState('');
  const [showPayPal, setshowPayPal] = useState(false);

  realCoupones.map((str) => {
    if (str === CouponInp) {
      ResultPrice = TotalPrice * 0.5;
      IsCouponeRigth = true;
    }
  });
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
              key={item.id}
              item={item}
              addProduct={addProduct}
              RemoveProduct={RemoveProduct}
            />
          );
        })}
        <div className={style.couponDiv}>
          <input
            placeholder='Enter Coupon'
            value={CouponInp}
            onChange={(e) => setCouponInp(e.target.value)}
          />
        </div>
        <div className={style.TotalPrice}>
          <h1>Total Price:</h1>
          <h1 className={style.NewPrice}>
            {IsCouponeRigth && cartItems.length > 0 ? (
              <>
                <p className={style.PreviousPrice}>{TotalPrice}$</p>
                <p className={style.LastPrice}>{ResultPrice}$</p>
              </>
            ) : (
              ResultPrice + '$'
            )}
          </h1>
        </div>
        <div className={style.Payment}>
          {showPayPal && ResultPrice > 0 ? (
            <PayPal price={ResultPrice / 1000} />
          ) : (
            <div className={style.Button}>
              <button
                onClick={() => {
                  setshowPayPal(true);
                }}
                disabled={ResultPrice <= 0}
              >
                Buy
              </button>
              <Link to={'/location'}>Chose location</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
