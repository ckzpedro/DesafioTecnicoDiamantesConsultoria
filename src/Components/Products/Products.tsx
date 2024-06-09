"use client";
import Itens from "./Products_components/Itens/Itens";
import styles from "./Products.module.css";
import Buttons from "./Products_components/Buttons/Buttons";
import { useEffect, useState } from "react";
import api from "services/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Product {
    name: string;
    price: number;
    image: string;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    const [swiper, setSwiper] = useState(null);
    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    useEffect(() => {
        api
            .get("/products")
            .then(function (response) {
                const data = response.data as Product[];
                setProducts(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(products)

    return (
        <div className={styles.placeholder}>
            <div className={styles.swiperbuttonprev} onClick={goPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <Swiper className={styles.swiper}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={setSwiper}
            >
                {products.map((product, index) => (
                    <SwiperSlide>
                        <Itens
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.swiperbuttonnext} onClick={goNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
}