function Person(props) {
  return (
    <p>
      {props.firstName} {props.lastName} {props.city}
    </p>
  );
}

export default Person;
