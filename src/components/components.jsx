import React from "react";
function Products() {
  const products = [
    { id: "3.1", name: "Milk", price: 19.99 },
    { id: "3.2", name: "Bread", price: 23.99 },
    { id: "3.3", name: "Cheese", price: 40.99 },
  ];
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} {product.price}
        </li>
      ))}
    </ul>
  );
}
export default Products;
