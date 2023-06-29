import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const CartButton = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const numberOfitem = cartItems.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);
  const classess = `${isButtonAnimated ? "bump" : ""}`;

  useEffect(() => {
    if (cartItems.length === 0) return;
    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button
      className={`${classess} mr-[10%] bg-[#4d1601] text-white px-5 py-8 rounded-2xl flex h-12 justify-between items-center hover:bg-[#2c0d00]`}
      onClick={onClick}
    >
      <span className="icon">
        {" "}
        <ShoppingCartIcon />
      </span>
      <h5 className="sm:hidden md:block text-base">Your Cart</h5>
      <span className="badge">{numberOfitem}</span>
    </button>
  );
};

export default CartButton;
