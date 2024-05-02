import React from "react";
// @ts-ignore
import styles from "./cart.module.css";
import CartItem from "./CartItem.tsx";
import CartItemType from "../types/CartItemType";

export default function Cart( {cart, setCart, bc}) {

    const clearCart = () => {
        setCart([]);
        bc.postMessage({action: "clear"});
    }

    const priceOfItems = cart.reduce((acc, item) => acc + (item.quantity*item.price), 0);
    const roundedPrice = Number(priceOfItems.toFixed(2));

    if (cart.length === 0) {
        return (
            <div className={styles.cart}>
                There are no items in the cart.
            </div>
        )
    }

    return (
    <div className={styles.cart}>
        {cart.map((item: CartItemType) => (
            <CartItem key={item.id} item={item} cart={cart} setCart={setCart} bc={bc}/>
        ))}
        <hr className={styles.line}/>
        <div className={styles.summary}>
            <button onClick={clearCart} className={styles.button}>Clear cart</button>
            <p className={styles.total} data-testid="total">{roundedPrice} DKK</p>
        </div>
    </div>
    )
}