import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <ul className={styles['footer__ul']}>
                <li><a href="https://videoglaz.ru/" target="_blank" rel="noreferrer">Партнеры</a></li>
                <li><a href="https://hi.watch/" target="_blank" rel="noreferrer">Поставщики</a></li>
                <li><a href="https://hi.watch/" target="_blank" rel="noreferrer">Контрагенты</a></li>
                <li><a href="https://videoglaz.ru/" target="_blank" rel="noreferrer">Друзья</a></li>
            </ul>

            <div className = {styles['footer__copyright']}>
                © All right reserved 2021
            </div>
            <div className = {styles['footer__copyright']}>
                Manufactured by @tapok696
            </div>

        </footer>
    );
};

export default Footer;