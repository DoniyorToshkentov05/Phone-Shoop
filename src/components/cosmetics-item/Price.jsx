import React from 'react';
import styles from './CosmeticsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCart } from '../../store/cart/cart.slice';

const Price = ({cosm}) => {
    const dispatch = useDispatch();

    const { cart } = useSelector(selectCart);
    
    const isExists = cart.some(c => c.id === cosm.id);

    return (
        <div className={styles.price}>
            <h3>{new Intl.NumberFormat('ru', {
                    style: "currency",
                    currency: 'Som',
                    minimumFractionDigits: 0
                }).format(cosm.price)}</h3>            
            {!isExists 
                ? <button 
                    className='button'
                    onClick={() => dispatch(addToCart(cosm))}
                  >
                    Savatga qoshish
                  </button>
                : <button
                      className='button-done'
                  >
                    SAvatga qoshildi
                  </button>

                }             
        </div>     
    )
}

export default Price;
