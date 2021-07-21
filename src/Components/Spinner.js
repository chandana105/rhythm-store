import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
      <div className="loader">
      <Loader type="Audio" color="#c4b5fd" height={60} width={60} />
      </div>
  );
};

export default Spinner;
