const CartItem = (props) => {
  const price = props.price;
  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">{`$${price}`}</span>
          <span className="amount">{`x${props.amount}`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
