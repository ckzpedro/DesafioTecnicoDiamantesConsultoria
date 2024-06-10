"use client"
import Body from "Components/Body/Body";
import Middle from "Components/Middle/Middle";
import Products from "Components/Products/Products";
import Header from "Components/Header/Header";
import { useState } from "react";
import Modal from "Components/Header/Header_components/Modal/Modal";
import styles from './page.module.css'

export default function Home() {

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Header
        onclick={handleModal}
      />
      <Body />
      <Middle />
      <Products />
      {
        open && (<div className={styles.modal}>
          <Modal
            close={handleModal}
          />
        </div>)
      }
    </div>
  );
}