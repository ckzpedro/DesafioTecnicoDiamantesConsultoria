import Button from './Header_components/Button/Button'
import Promo from './Header_components/Promo/Promo'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
            <Promo />
            <div className={styles.header}>
                <p className={styles.logo}>INNOVATION<br />STORE</p>
                <input className={styles.searchbar} type="search" placeholder='Digite o produto que deseja buscar ' />
                <Button />
            </div>
        </div>

    )
}