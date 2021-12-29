import React from 'react';
import Card from '../Card/Card';
import styles from './ItemList.module.css'
import Layout from '../../components/layout/layout';
import { cameraList } from "../../CameraList";

const ItemList = () => {

    return (
        <Layout>
            <div className={styles.catalog}>
                <h1>Каталог</h1>
                <div className={styles['catalog__item-list']}>
                    {
                        cameraList.map((camera) => {

                            return (

                                <Card
                                    key = {camera.id}
                                    id = {camera.id}
                                    img = {camera.img}
                                    title = {camera.title}
                                    cost = {camera.cost}
                                    quantity = {camera.quantity}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};
export default ItemList;