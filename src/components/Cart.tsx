import React from "react";
// @ts-ignore
import styles from "./cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {

    const clearCart = () => {
        console.log("Clearing cart");
    }

    if (true) {
        return (
            <div className={styles.cart}>
                There are no items in the cart.
            </div>
        )
    }

/*     return (
    <div className={styles.cart}>
        {cart.map((item: CartItemType) => (
            <CartItem key={item.id} item={item}/>
        ))}
        <hr className={styles.line}/>
        <div className={styles.summary}>
            <button onClick={clearCart} className={styles.button}>Clear cart</button>
            <p className={styles.total}>{roundedPrice} DKK</p>
        </div>
    </div>
    ) */
}