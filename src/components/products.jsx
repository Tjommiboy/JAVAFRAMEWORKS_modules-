import React from "react";
const products = [
  { id: 0, title: "Bread", price: 19.99, isOnSale: true },
  { id: 1, title: "Milk", price: 29.99, isOnSale: false },
  { id: 2, title: "Cheese", price: 35.99, isOnSale: false },
  { id: 3, title: "Water", price: 15.99, isOnSale: true },
];

function ProductsList() {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} {"  "}
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
