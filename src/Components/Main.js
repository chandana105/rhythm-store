import ProductCard from "./MainContents/ProductCard";
// import { filteredData } from "../";

const Main = ({ sortBy, productDispatch ,filteredData }) => {
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
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Price: Low to High">Price: Low to High</option>
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

// {Data.map((item) => (
//   <ProductCard item={item} />
// ))}
