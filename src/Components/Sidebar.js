import { useStore } from "../Contexts/store-context";

const Sidebar = () => {
  const { showInventoryAll, showFastDelivery, productDispatch, priceRange } =
    useStore();
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
              max="2050"
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
      </ul>
    </div>
  );
};

export default Sidebar;
