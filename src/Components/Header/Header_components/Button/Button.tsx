"use client"
import styles from './Button.module.css'
import Modal from '../Modal/Modal'
import { useState } from 'react';
import ReactModal from 'react-modal';
import { IoClose } from 'react-icons/io5';

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