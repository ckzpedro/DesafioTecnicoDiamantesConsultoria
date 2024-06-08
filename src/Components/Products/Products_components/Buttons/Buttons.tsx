import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from './Buttons.module.css'

export default function Buttons() {
    return (
        <div className={styles.placeholder}>
            <button className={styles.btn}><IoIosArrowBack size={32} /></button>
            <button className={styles.btn}><IoIosArrowForward size={32} /></button>
        </div>
    )
}
