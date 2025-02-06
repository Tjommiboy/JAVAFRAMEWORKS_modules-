import React from "react";
import "./styles/styles.css";
import "./styles/styles.scss";

// import styles from "./App.module.css";
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
      <div>
        <p className="container text-xl font-semibold text-blue-500 bg-gray-400 p-4 rounded-lg shadow-lg">
          What's up, this is a test
        </p>
      </div>
      <div className={` flex justify-center items  `}>
        <Nav
          isActive={activeBox === 1}
          onClick={() => toggleBox(1)}
          className="py-2 px-4 rounded-md hover:bg-gray-200 transition-all"
        >
          Home
        </Nav>
        <Nav
          isActive={activeBox === 2}
          onClick={() => toggleBox(2)}
          className="py-2 px-4 rounded-md hover:bg-gray-200 transition-all"
        >
          Products
        </Nav>
        <Nav
          isActive={activeBox === 3}
          onClick={() => toggleBox(3)}
          className="py-2 px-4 rounded-md hover:bg-gray-200 transition-all"
        >
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
      <div>Hello world</div>
      <p>Paragraph 1.</p>
      <h1>Products</h1>
      <ProductsList className="flex justify-center items-center h-screen" />
      <Conditional />
      <Counter />
    </>
  );
}

export default App;
