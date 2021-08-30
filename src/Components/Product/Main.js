import ProductCard from "./ProductCard";
import { useStore } from "../../Contexts/store-context";
import Spinner from "../Spinner";
import ErrorComponent from "../ErrorComponent";

const Main = ({ filteredData }) => {
  const { sortBy, showLoader, isError, productDispatch } = useStore();

  return (
    <div className="content">
      <main>
        <div className="search-container sort">
          <div className="search-box search">
            <span>Sort by:</span>
            <span>
              <select
                name="sorting"
                id="sorting"
                onChange={(e) =>
                  productDispatch({ type: "SORT", payload: e.target.value })
                }
                value={sortBy}
              >
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </span>
          </div>
        </div>
        <div className="products">
          {showLoader && <Spinner type="Audio" color="#c4b5fd" height={60} />}
          {isError !== false  && <ErrorComponent error={isError}   />}
          {filteredData.map((item) => (
            <ProductCard item={{ _id: item.id, ...item }} key={item._id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;
