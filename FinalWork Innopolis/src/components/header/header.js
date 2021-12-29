import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { Context } from '../../Context';

const nav = [
    {
        to: '/',
        text: 'Лого',
        img: '/img/logo.png'
    },
    {
        to: '/catalog',
        text: 'Каталог',
    },
    {
        to: '/',
        text: 'Подписки',
    },
    {
        to: '/profile',
        text: 'Профиль',
    },
    {
        to: '/cart',
        text: '🛒',
    },
]

const Header = () => {

    const { onExit, isAuth } = useContext(Context);

    return (
        <header>
            <div className={styles['header__nav']}>
                <div className={styles['header__ul']} component="ul" >
                    {nav.map(({ to, text, img }) => (
                        <div className={!img ? styles['header__li'] : undefined} component="li" key={text}>
                            {!img && <Link className={styles['header__a']} to={to}>{text}</Link>}
                            {img && <Link to={to}><img src={img} alt={text}/></Link>}
                        </div>
                    ))}
                    {isAuth && <button onClick={onExit} className={styles['header__button']}>
                        {String('Выход')}
                    </button>}
                </div>
            </div>
        </header>
    )
}
export default Header;
