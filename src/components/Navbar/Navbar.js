import CartButton from "./CartButton";

const Navbar = ({ onShow }) => {
  return (
    <nav className="px-3 py-5 flex justify-between items-center  bg-[#8a2b06]">
      <h3 className="font-bold text-white sm:text-2xl md:text-3xl">
        React Store
      </h3>
      <CartButton onClick={onShow} />
    </nav>
  );
};

export default Navbar;
