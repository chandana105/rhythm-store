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
        {/* oval  */}
        <div className="products">
          {showLoader && <div className="loader"> <Spinner type="Audio" color="#c4b5fd" height={60} /> </div>}
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


// loadrs mein problem as on same page we re keepingloader for so many things ,so how it ll diferetate: -
// 1) prodcuts page :- prodcutsloading , adtocartloadign, inc/dec qty loading, add to wislist load, remvoewishlsitload
// 2) carts page : - cartloader , removeitem load, qtyinc/dec load, mocetowishsit load
// 3) wishlst page:- wishlsitlaoder, moveto cart loader, remove loader
