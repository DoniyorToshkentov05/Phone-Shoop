import React from 'react';
import styles from '../components/сosmetics-list/CosmeticsList.module.css';
import CosmeticsItem from '../components/cosmetics-item/CosmeticsItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/favorites/favorites.slice';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div className={styles.favorites}>
            <h1>Sevimlilar</h1>
                {favorites.length ? (
                    <div className={styles.item}>
                        {favorites.map(cosm => 
                            <CosmeticsItem key={cosm.id} cosm ={cosm} />
                        )}   
                    </div>
                ) : (
                    <div className={styles.content}>
                        <p>Sizda hech qanday tanlangan mahsulot yoʻq. Katalogga o'ting va didingizga mos narsani tanlang.</p>
                        <NavLink to='/online-shop'><button className='button'>Katalog</button></NavLink> 
                    </div>
                )}   
                {!!favorites.length && <NavLink to='/online-shop'><button className='button'>Katalog</button></NavLink>}
        </div>
    )
}

export default Favorites;
