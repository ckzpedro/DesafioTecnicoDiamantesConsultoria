import Itens from "./Products_components/Itens/Itens";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from './Products.module.css'

import Pants from '@/../public/calca.png'
import Shirt1 from '@/../public/camisa.png'
import Shirt2 from '@/../public/camisa_2.png'
import Coat from '@/../public/casaco.png'
import Buttons from "./Products_components/Buttons/Buttons";

export default function Products() {
    return (
        <div>
            <Buttons />
            <div className={styles.placeholder}>
                <Itens
                    name='T-shirt Tape '
                    price={150.00}
                    image={Shirt1}
                />
                <Itens
                    name='Skinny Fit Jeans'
                    price={150.00}
                    image={Pants}
                />
                <Itens
                    name='Colorfull blouse'
                    price={99.00}
                    image={Shirt2}
                />
                <Itens
                    name='Cardigan'
                    price={460.99}
                    image={Coat}
                />
            </div>
        </div>

    )
}