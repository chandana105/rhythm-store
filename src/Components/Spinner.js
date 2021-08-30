import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ type, color, height }) => {
  return (
    <div className="loader">
      <Loader type={type} color={color} height={height} width={60} />
    </div>
  );
};

export default Spinner;
