import React, { useState, useContext } from 'react';
import Layout from "../../components/layout/layout";
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../reducers';
import { Context } from '../../Context'
import styles from './login-page.module.css'


const LoginPage = () => {

    const { isAuth, onAuth } = useContext(Context);
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [token, setToken] = useState('');  
    
    const loadUserData = (id, token) => {
        if (id && token) {
            dispatch(setAuthData({id, token}));
            onAuth(true);
        }
    }

    const sign_in = (e) => {
        e.stopPropagation();
        loadUserData(id, token);
    }

    if(isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (

        <Layout>
            <div className={styles['sign-in__flex']}>
                <form className={styles['sign-in']}>
                    <input className={styles['sign-in__input']}
                        onChange={(e) => setId(e.target.value)}
                        value={id}
                        type='email'
                        id="email"
                        placeholder="Enter ID"
                    />
                    <input className={styles['sign-in__input']}
                        onChange={(e) => setToken(e.target.value)}
                        value={token}
                        id="password"
                        type="password"
                        placeholder="Enter Token"
                    />
    
                    <button className={styles['sign-in__button']} type = 'button' onClick = {sign_in}>ВХОД</button>
                </form>
            </div>
        </Layout>

    );
};

export default LoginPage;