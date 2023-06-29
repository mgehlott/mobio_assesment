import Modal from "../ui/Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { reset } from "../../store/cartSlice";

const Cart = ({ onClose }) => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isOrderDone, setIsOrderDone] = useState(false);

  const totalAmountt = (+total).toFixed(2);

  const isCartEmpty = items.length === 0;

  console.log(items);
  console.log(totalAmountt);
  const orderHandler = () => {
    dispatch(reset());
    setIsOrderDone(true);
  };
  const modalActions = (
    <div className="action">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      {!isCartEmpty && (
        <button className="order-btn" onClick={orderHandler}>
          {`Order (COD)`}
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className="cart-itmes">
        {items.map((i) => {
          return (
            <CartItem
              key={i.id}
              name={i.title}
              price={i.price}
              amount={i.quantity}
            />
          );
        })}
      </ul>
      {!isCartEmpty && (
        <div className="total">
          <span>Totol Amount</span>
          <span>{totalAmountt}</span>
        </div>
      )}
      {isCartEmpty && <p className="font-bold text-center">Cart Is Empty</p>}
      {modalActions}
    </>
  );

  const didSubmiteModalContent = (
    <>
      <p>Succesfully send order!!!</p>
      <div className="action">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isOrderDone && cartModalContent}

      {isOrderDone && didSubmiteModalContent}
    </Modal>
  );
};

export default Cart;
