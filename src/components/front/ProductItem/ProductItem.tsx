import React from 'react';
import style from './ProductItem.module.css';

interface IProductItem {
  product: any;
  id: number;
  name: string;
  price: number;
  img: string;
  addProduct: any;
}

const ProductItem = (props: IProductItem) => {
  return (
    <div className={style.Item}>
      <img className={style.img} src={props.img} alt={props.name} />
      <h1 className={style.name}>{props.name}</h1>
      <h1 className={style.price}>{props.price}$</h1>
      <button
        className={style.addtcbtn}
        onClick={() => {
          props.addProduct(props.product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
