import React from "react";
function Car(props) {
  return (
    <div>
      The {props.name} has {props.doors} doors and {props.gears} gears it is{" "}
      {props.automatic ? " a automatic" : " a manual"} car.
    </div>
  );
}
export default Car;
