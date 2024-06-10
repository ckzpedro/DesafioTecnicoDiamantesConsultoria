import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.css'
import { Product } from '@prisma/client';
import { useState, useEffect, MouseEventHandler } from 'react';
import api from 'services/api';

interface ModalProps {
    close: () => void
}

export default function Modal({ close }: ModalProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: 0.0,
        image: ''
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }

    const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: parseFloat(value)
        }))
    }

    const handleSub = async () => {
        try {
            await api
                .post("/create_product", newProduct)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.head}>
                <div className={styles.text}>
                    <p className={styles.store_name}>INNOVATION STORE</p>
                    <p className={styles.title}>Adicionar Produto</p>
                </div>
                <button className={styles.button} onClick={close}><IoClose /></button>
            </div>

            <div>
                <form className={styles.field} action="">
                    <label>Nome do Produto: </label><br />
                    <input className={styles.input} type="text" name='name' value={newProduct.name} onChange={handleInput} /><br />
                    <label>Valor R$: </label><br />
                    <input className={styles.input} type='number' name='price' value={newProduct.price} onChange={handleInput2} /><br />
                    <label>Foto do produto: </label><br />
                    <input className={styles.input} type="text" name='image' value={newProduct.image} onChange={handleInput} /><br />
                    <button type="submit" className={styles.submit} onClick={handleSub}>Adicionar</button>
                </form>
            </div>
        </div>
    )
}