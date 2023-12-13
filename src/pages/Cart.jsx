import React from 'react';
import styles from '../components/cart-item/CartItem.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../components/cart-item/CartItem';
import { NavLink } from 'react-router-dom';
import { sumBy } from '../utils/common';
import { selectCart } from '../store/cart/cart.slice';

const Cart = () => {
    const { cart } = useSelector(selectCart);
 
    return (
        <div className={styles.cart}>
            <h1>Savat</h1>
            {cart.length ? (
                <div>
                    {cart.map((cosm, index) => 
                        <CartItem key={cosm.id} cosm={cosm} index={index} />
                    )}
                    <div className={styles.total}>
                        <strong>Jami narxi: {sumBy(cart.map(({ count, price }) => price * count))} Som.</strong>
                    </div> 
                    <NavLink to='/online-shop'><button className='button'>Katalog</button></NavLink>
                </div>
            ) : (
                <div className={styles.content}>
                    <p>Sizning savatingiz bo'sh. Mahsulotlarni tanlash uchun katalogga o'ting.</p>
                    <NavLink to='/online-shop'><button className='button'>Katalog</button></NavLink>
                </div>
            )} 
        </div>
    )
}

export default Cart;
