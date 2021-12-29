import React from 'react';
import Layout from "../../components/layout/layout";
import styles from "../Card/Card.module.css";
import { useParams } from "react-router-dom";
import { cameraList } from "../../CameraList";


const AnyCamera = () => {

    const { id } = useParams();
    let cameraCard = cameraList.find(camera => camera.id === Number(id));

    return (
        <Layout>
            <div className={styles.card}>
                <img className={styles['card__img']} src = {cameraCard.img} alt = 'камера'/>
                <h2>{cameraCard.title}</h2>
                <p>{cameraCard.description}</p>
                <div className={styles['card__cart']}>
                    <h3>{cameraCard.cost}</h3>
                    <button className={styles['card__cart-button']}>🛒</button>
                </div>
            </div>
        </Layout>
    );
};

export default AnyCamera;