import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.css'
import { Product } from '@prisma/client';
import { useState, useEffect } from 'react';
import api from 'services/api';

export default function Modal() {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    })

    useEffect(() => {
        api
            .post("/create_product", products)
            .then(function (response) {
                const data = response.data as Product[];
                setProducts(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(products)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api
            .post("/create_product", newProduct)
            .then(function (response) {
                const data = response.data as Product[];
                setProducts(data);
                setNewProduct({
                    name: '',
                    price: '',
                    image: ''
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className={styles.modal}>
            <div className={styles.head}>
                <div className={styles.text}>
                    <p className={styles.store_name}>INNOVATION STORE</p>
                    <p className={styles.title}>Adicionar Produto</p>
                </div>
                <button className={styles.button}><IoClose /></button>
            </div>

            <div className={styles.field}>
                <form action="">
                    <label>Novo Produto</label><br />
                    <input type="text" name='name' value={newProduct.name} onChange={handleInput} /><br />
                    <label>Valor R$</label><br />
                    <input type="text" name='price' value={newProduct.price} onChange={handleInput} /><br />
                    <label>Foto do produto</label><br />
                    <input type="text" name='image' value={newProduct.image} onChange={handleInput} /><br />
                    <button onClick={() => handleSub}>Adicionar</button>
                </form>
            </div>
        </div>
    )
}