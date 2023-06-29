import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";
import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const cartOpenHandler = () => {
    console.log("cartttt open");
    setIsCartShown(true);
  };

  const cartCloseHandler = () => {
    setIsCartShown(false);
  };

  return (
    <main>
      {isCartShown && <Cart onClose={cartCloseHandler} />}
      <Navbar onShow={cartOpenHandler} />
      <Products />
    </main>
  );
}

export default App;
