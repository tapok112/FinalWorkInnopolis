import React from 'react';
import styles from './CartItem.module.css';
import { NavLink } from 'react-router-dom';
import { quantityUp, quantityDown, removeFromListOfItems } from '../../reducers';
import { useDispatch} from 'react-redux';

const CartItem = (props) => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(removeFromListOfItems(props.id));
    };

    const qtyUp = (e) => {
        e.stopPropagation();
        dispatch(quantityUp(props.id));
    }
    const qtyDown = (e) => {
        e.stopPropagation();
        dispatch(quantityDown(props.id));
    }

    return (
        <div className={styles['cart-item']}>
            <button onClick = {handleClick} className={styles['cart-item__button']}>❌</button>
            <img className={styles['cart-item__img']} src = {props.img} alt = 'камера'/>
            <h2><NavLink to={`/catalog/${props.id}`}> {props.title} </NavLink></h2>
            <div className={styles['cart__price']}>
                <h3>{props.cost}</h3>
                <span className={styles['cart-item__qty']}>X{props.quantity}</span>
                <button className={styles['cart-item__setqty']} onClick={qtyUp}>➕</button>
                <button className={styles['cart-item__setqty']} disabled={(props.quantity <= 1) ? 'disabled' : ''} onClick={qtyDown}>➖</button>
            </div>            
        </div>
    );
};

export default CartItem;