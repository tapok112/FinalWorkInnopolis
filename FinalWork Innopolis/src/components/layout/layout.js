import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './layout.module.css';

const Layout = ({children}) => {

    return (
        <div className={styles.layout}>
            <div className={styles['layout__container']}>
                <Header />
                <div className={styles['layout__content']}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};
export default Layout;