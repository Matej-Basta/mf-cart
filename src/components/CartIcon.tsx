import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart.tsx';
// @ts-ignore
import styles from './cartIcon.module.css';

export default function CartIcon() {
    const [isCartVisible, setIsCartVisible] = useState(false);

    return (
        <>
            <div className={styles.cart}>
                <FaShoppingCart onClick={() => setIsCartVisible(!isCartVisible)} className={styles["cart-icon"]}/>
                <div>3</div>
            </div>
            {isCartVisible ? <Cart /> : null}
        </>
    )
}