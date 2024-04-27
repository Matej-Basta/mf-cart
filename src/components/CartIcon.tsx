import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart.tsx';
// @ts-ignore
import styles from './cartIcon.module.css';
import CartItemType from '../types/CartItemType';

const bc = new BroadcastChannel('cart');

export default function CartIcon() {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cart, setCart] = useState<CartItemType[]>([]);


    bc.onmessage = (event) => {
        const data = event.data;
        if (data.action === "add") {
            const item = cart.find((cartItem: CartItemType) => cartItem.id === data.product.id);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({...data.product, quantity: 1});
            }
            setCart([...cart]);
        }
    };

    const itemQuantity = cart.reduce((acc: number, item: CartItemType) => acc + item.quantity, 0);

    return (
        <>
            <div className={styles.cart}>
                <FaShoppingCart onClick={() => setIsCartVisible(!isCartVisible)} className={styles["cart-icon"]}/>
                <div>{itemQuantity}</div>
            </div>
            {isCartVisible ? <Cart cart={cart} setCart={setCart} bc={bc} /> : null}
        </>
    )
}