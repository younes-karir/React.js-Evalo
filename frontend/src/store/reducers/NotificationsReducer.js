import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NOTIFY_ERROR, NOTIFY_INFO, NOTIFY_SUCCESS, NOTIFY_WARNING } from "../actions/types";

// showNotification(state, action) {
//     if (action.payload.type === "info") {
//       toast.info(action.payload.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else if (action.payload.type === "error") {
//       toast.error(action.payload.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else if (action.payload.type === "warning") {
//       toast.warning(action.payload.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else {
//       toast.success(action.payload.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   },

const notification = function (state, action) {
  switch (action.type) {
    case NOTIFY_ERROR:
      toast.error(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
    case NOTIFY_SUCCESS:
      toast.success(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
    case NOTIFY_INFO:
      toast.info(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
      case NOTIFY_WARNING:
      toast.warning(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
    default:
      return null;
  }
};

export default notification;
