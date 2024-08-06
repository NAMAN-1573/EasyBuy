import { FaShoppingCart, FaBell } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleNotificationsModal } from "../redux/Slices/CartSlice";

const Navbar = () => {
  const { cart, notifications } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleBellClick = () => {
    dispatch(toggleNotificationsModal());
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" alt="logo" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <div className="relative cursor-pointer" onClick={handleBellClick}>
            <FaBell className="text-2xl" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {notifications.length}
              </span>
            )}
          </div>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
