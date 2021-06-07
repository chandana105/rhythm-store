import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()

const Toast = (message) => {
    return toast.dark(message , {
        position : toast.POSITION.TOP_RIGHT
    })

};

export default Toast;
