import React from 'react';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { addInListOfItems } from '../../reducers';
import { useDispatch, useSelector} from 'react-redux';

const Card = (props) => {    
    
    const cartItems = useSelector(state => state.main.cartItems);
    const dispatch = useDispatch();

    const cartIds = cartItems.map(item => {return item.id})

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(addInListOfItems(props));
    };

    return (
        <div className={styles.card}>
            <img className={styles['card__img']} src = {props.img} alt = 'камера'/>
            <h2><NavLink to={`/catalog/${props.id}`}> {props.title} </NavLink></h2>
            <div className={styles['card__cart']}>
                <h3>{props.cost}</h3>
                {!(cartIds.includes(Number(props.id))) ? <button onClick = {handleClick} className={styles['card__cart-button']}>🛒</button> : <div>Добавлено в корзину</div>}
            </div>
        </div>
    );
};

export default Card;