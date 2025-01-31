import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/card/cardSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
