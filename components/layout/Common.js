import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastIt = (message) => {
  toast(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
