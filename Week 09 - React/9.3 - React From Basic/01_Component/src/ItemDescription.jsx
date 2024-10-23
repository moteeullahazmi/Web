function ItemDescription({ name,description,price }) {
  return (
    <>
      <h1>{name}</h1>
      <h6>
        <i>{description}</i>
      </h6>
      
      <b>{price}</b>
    </>
  );
}

export default ItemDescription