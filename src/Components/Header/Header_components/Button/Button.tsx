"use client"
import styles from './Button.module.css'

interface ButtonProps {
    onclick: () => void
}

export default function Button({ onclick }: ButtonProps) {

    return (
        <div>
            <button className={styles.button} onClick={onclick}>Adicionar Produto +</button>
        </div>

    )
}