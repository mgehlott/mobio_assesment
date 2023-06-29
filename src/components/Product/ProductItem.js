import { useDispatch } from "react-redux";
import { add} from '../../store/cartSlice';

const ProductItem = ({product}) => {
  const dispatch = useDispatch();
  const { title,image,price} = product;
  const addCartHandler = () => {
    console.log('addd');
    dispatch(add({item:product}));
  }
  return (
    <div className="m-3 shadow-lg p-3 ">
      <div>
        <img className="img m-auto" src={image} alt={title} />
        <p className="mt-2 font-medium text-md">{title}</p>
        <p className="mt-2">$ {price}</p>
        <button
          onClick={addCartHandler}
          className="bg-red-800 text-white px-3 py-2 mt-2 w-full rounded-md">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
