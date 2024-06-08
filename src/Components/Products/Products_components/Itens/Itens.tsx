import Image, { StaticImageData } from "next/image"
import { FaStar } from "react-icons/fa";

import styles from './Itens.module.css'

interface ProductsProps {
    name: string
    price: number
    image: StaticImageData
}

export default function Itens({ name, price, image }: ProductsProps) {
    return (
        <div className={styles.placeholder}>
            <Image
                src={image}
                alt={''}
                quality={100}
                width={185}
                height={233}
            />
            <div>
                <p>{name}</p>
                {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar className={styles.star} />
                ))}
                <p>R$:{price}</p>
            </div>
        </div>
    )
}
