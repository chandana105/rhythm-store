import ProductCard from "./MainContents/ProductCard";
import  {data}  from "../Data";

const Main = () => {
  return (
    <div className="content">
      <main>
        <div className="search-container sort">
          <div className="search-box search">
            <span>Sort by:</span>
            <span>
              <select name="sorting" id="sorting">
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Price: Low to High">Price: Low to High</option>
              </select>
            </span>
          </div>
        </div>
        <div className="products">
          {data.map(item => <ProductCard item={item}  />)}
        </div>
      </main>
    </div>
  );
};

export default Main;


// {Data.map((item) => (
//   <ProductCard item={item} />
// ))}