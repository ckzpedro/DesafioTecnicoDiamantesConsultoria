import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.css'

export default function Modal() {

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

                    <label>Novo Produto</label><br /><input type="text" /><br />
                    <label>Valor R$</label><br /><input type="text" /><br />
                    <label>Foto do produto</label><br /><input type="file" /><br />
                    <input type="submit" value='Adicionar' />
                </form>

            </div>
        </div>
    )
}