import ProductCard from "./ProductCard";
import { useStore } from "../../Contexts/store-context";

const Main = ({ filteredData }) => {
  const { sortBy, productDispatch } = useStore();

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
          {filteredData.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;
