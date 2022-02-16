import { useStore } from "../../Contexts/store-context";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const {
    showInventoryAll,
    showFastDelivery,
    productDispatch,
    priceRange,
    sortByCategory,
  } = useStore();
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (path === "/products") {
      setDisplay(true);
    }
  }, [path]);
  return (
    <div className="side-bar" id="side-bar">
      <div className="side-bar-box">
        <span>FILTERS</span>
        <button
          className="btn btn-gp bg-red "
          onClick={() => productDispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          CLEAR ALL
        </button>
      </div>

      <ul>
        <li>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={showInventoryAll}
              onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
            />
            <span>Include Out Of Stock</span>
          </label>
        </li>
        <li>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={showFastDelivery}
              onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
            />
            <span>Fast Delivery Only</span>
          </label>
        </li>
        <li>
          <label
            style={{ display: "block", marginTop: "1rem" }}
            className="price-range-label"
          >
            Price Range
            <input
              type="range"
              value={priceRange}
              min="0"
              max="20000"
              onChange={(e) =>
                productDispatch({
                  type: "PRICE_RANGE",
                  payload: e.target.value,
                })
              }
            />
          </label>
          <span>0 to {priceRange}</span>
        </li>
        {display && (
          <li>
            <div className="search-container sort">
              <div className="search-box search">
                <span>Sort by :- Category</span>
                <span>
                  <select
                    name="sorting"
                    id="sorting"
                    onChange={(e) =>
                      productDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: e.target.value,
                      })
                    }
                    value={sortByCategory}
                  >
                    <option>All</option>
                    <option>Musical Instruments</option>
                    <option>Musical Utilities</option>
                    <option>Musical Books</option>
                  </select>
                </span>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
