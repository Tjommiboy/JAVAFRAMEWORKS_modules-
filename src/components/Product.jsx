import React from "react";
function Product(props) {
  // The props we pass into a component are available via the
  // "props" parameter of a component.

  // Using console.log to show you the contents of the object
  // which you'll see contains the props we passed in
  console.log(props);
  // Logs:
  // {
  //   "title": "Milk",
  //   "price": 29.99
  // }

  return (
    <p>
      {/* Display our title and price values */}
      {props.title}: {props.price}
    </p>
  );
}

export default Product;
