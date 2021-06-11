import Navbar from "./Nav";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <p style={{ textAlign: "center" }}>
        Please visit{" "}
        <Link to="/product-listing">
          <b>Products</b>{" "}
        </Link>{" "}
        page
      </p>
    </>
  );
}
