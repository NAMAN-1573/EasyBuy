import { useSelector, useDispatch } from "react-redux";
import { toggleNotificationsModal } from "../redux/Slices/CartSlice";

const NotificationsModal = () => {
  const { notifications, isNotificationsModalOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleNotificationsModal());
  };

  if (!isNotificationsModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-2 p-2 border-b">
                {notification.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No notifications</p>
        )}
        <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationsModal;
