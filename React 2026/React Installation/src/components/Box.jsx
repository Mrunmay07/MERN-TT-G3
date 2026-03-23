function Box(props) {
  return (
    <>
      <h1>{props.boxCount}</h1>
      <p>{props.boxName}</p>
    </>
  );
}

export default Box;
