import Header from "@/Components/Header/Header";
import Body from "@/Components/Body/Body";
import Middle from "@/Components/Middle/Middle";

import styles from './page.module.css'
import Products from "@/Components/Products/Products";



export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Middle />
      <Products />
    </div>
  );
}