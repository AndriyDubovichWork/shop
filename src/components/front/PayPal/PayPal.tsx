import React, { useEffect, useRef } from 'react';
import style from './PayPal.module.scss';
declare const window: any;

const PayPal = (props: { price: number }) => {
  const paypal = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'USD',
                  value: props.price,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div className={style.PayPal}>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
