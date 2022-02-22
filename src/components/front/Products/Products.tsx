import React from 'react';
import ProductItem from './../ProductItem/ProductItem';
import style from './Products.module.css';

interface IProducts {
  data: any;
  addProduct: any;
}
const Products = (props: IProducts) => {
  return (
    <div>
      <h1 className={style.Product}>Products</h1>
      <div className={style.products}>
        {props.data.prodctItems.map((product: any) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              addProduct={props.addProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
