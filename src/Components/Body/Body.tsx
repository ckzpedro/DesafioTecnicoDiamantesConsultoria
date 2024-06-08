"use client"

import styles from './Body.module.css'
import Infos from './Body_components/Infos/Infos'
import person from '../../../public/pessoa.png'
import Image from 'next/image'
import axios from 'axios';
import { useEffect } from 'react';
import api from 'services/api';

export default function Body() {

    useEffect(() => {
        api.get('/products')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.body}>
            <div>
                <h1 className={styles.text}>Vista-se de elegância e<br />estilo - descubra a moda <br /> perfeita para você</h1>
                <div className={styles.infos}>
                    <Infos
                        title="+280000"
                        subtitle='vendas realizadas'
                    />
                    <Infos
                        title="+40000"
                        subtitle='Produtos disponíveis'
                    />
                </div>
            </div>
            <Image
                src={person}
                alt={''}
                quality={100}
            />
        </div>
    )
}