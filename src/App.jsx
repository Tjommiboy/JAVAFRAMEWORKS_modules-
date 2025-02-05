import React from "react";
import "./styles/styles.css";
import "./styles/styles.scss";

import styles from "./App.module.css";
import Products from "./components/components";
import Greeting from "./components/Greeting";
import Product from "./components/Product";
import Car from "./components/Car";
import Person from "./components/Person";

import Counter from "./components/Counter";
import Prod from "./components/Prod";
import { useState } from "react";
import ProductsList from "./components/products";
import Conditional from "./components/conditionalContent";
import SuperCounter from "./components/subtracter";
import Nav from "./components/box";
import * as S from "./App.styles";

function App() {
  const isActive = true;
  const [productTitle, setProductTitle] = useState("Jay");
  const [activeBox, setActiveBox] = useState(null);
  const [isWeird, setIsWeird] = useState(false);
  function toggleBox(index) {
    setActiveBox(activeBox === index ? null : index);
  }
  function onButtonClick() {
    setProductTitle("frog");
  }

  return (
    <>
      <div className={styles.container}>
        <Nav isActive={activeBox === 1} onClick={() => toggleBox(1)}>
          Home
        </Nav>
        <Nav isActive={activeBox === 2} onClick={() => toggleBox(2)}>
          Products
        </Nav>
        <Nav isActive={activeBox === 3} onClick={() => toggleBox(3)}>
          About Us
        </Nav>
      </div>
      <S.WeirdButton onClick={() => setIsWeird(!isWeird)} $weird={isWeird}>
        weird useStatebutton
      </S.WeirdButton>

      <S.BaseButton>Click me</S.BaseButton>
      <S.PrimaryButton>Click me</S.PrimaryButton>
      <S.SeconderyButton>Click me</S.SeconderyButton>
      <SuperCounter />
      <ul>
        <li>Primary</li>
        <li>Secondary</li>
      </ul>
      <div className={styles.container}>Hello world</div>
      <p className={styles.container}>Paragraph 1.</p>
      <h1 className={styles.container}>Products</h1>
      <ProductsList />
      <Conditional />
      <Counter />
    </>
  );
}

export default App;
