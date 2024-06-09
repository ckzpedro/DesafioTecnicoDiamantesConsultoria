"use client"

import Button from './Header_components/Button/Button'
import Promo from './Header_components/Promo/Promo'
import styles from './Header.module.css'
import { useState } from 'react';
import Modal from './Header_components/Modal/Modal';

interface HeaderProps {
    onclick: () => void
}

export default function Header({ onclick }: HeaderProps) {

    return (
        <div>
            <Promo />
            <div className={styles.header}>
                <p className={styles.logo}>INNOVATION<br />STORE</p>
                <input className={styles.searchbar} type="search" placeholder='Digite o produto que deseja buscar ' />
                <Button
                    onclick={onclick}
                />
            </div>
        </div>
    )
}