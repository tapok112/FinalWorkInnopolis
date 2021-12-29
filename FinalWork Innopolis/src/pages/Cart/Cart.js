import React from 'react';
import CartItem from './CartItem';
import styles from '../CameraList/ItemList.module.css'
import Layout from '../../components/layout/layout';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.main.cartItems);

    return (
        <Layout>
            <div className={styles.catalog}>
                <h1>Корзина</h1>
                <div className={styles['catalog__item-list']}>
                    {
                        cartItems.map((item) => {
                            return (
                                <CartItem
                                    key = {item.id}
                                    id = {item.id}
                                    img = {item.img}
                                    title = {item.title}
                                    cost = {item.cost}
                                    quantity = {item.quantity} />
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};
export default Cart;