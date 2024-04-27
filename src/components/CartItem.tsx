import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
// @ts-ignore
import styles from './cartItem.module.css';

export default function CartItem({item, cart, setCart, bc}) {
    const addItem = () => {
        const oldItem = cart.find((cartItem) => cartItem.id === item.id);
        if (oldItem) {
            oldItem.quantity += 1;
        }
        setCart([...cart]);
        const { quantity, ...itemToSend } = item;
        bc.postMessage({action: "add", product: itemToSend});
    }

    const removeItem = () => {
        const oldItem = cart.find((cartItem) => cartItem.id === item.id);
        if (oldItem) {
            oldItem.quantity -= 1;
            if (oldItem.quantity === 0) {
                const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
                setCart([...newCart]);
                const { quantity, ...itemToSend } = item;
                bc.postMessage({action: "remove", product: itemToSend});
                return;
            }
        }
        setCart([...cart]);
        const { quantity, ...itemToSend } = item;
        bc.postMessage({action: "remove", product: itemToSend});
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.quantity}>
                <CiCircleMinus onClick={removeItem} className={styles.icon}/>
                <p className={styles["quantity-number"]}>{item.quantity}</p>
                <CiCirclePlus onClick={addItem} className={styles.icon}/>
            </div>
            <div className={styles.product}>
                <img src={item.image} alt={item.name} className={styles.image}/>
                <p className={styles.name}>{item.name}</p>
            </div>
            <p>{(item.price * item.quantity).toFixed(2)} DKK</p>
        </div>
    );
}