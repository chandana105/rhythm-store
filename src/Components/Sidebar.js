import { useStore } from "../Contexts/storeContext";

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
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={showInventoryAll}
              onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Include Out Of Stock
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={showFastDelivery}
              onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
            />
            Fast Delivery Only
          </label>
        </li>
        <li>
          <label style={{ display: "block", marginTop: "1rem" }}>
            Price Range
            <input
              type="range"
              value={priceRange}
              min="0"
              max="2000"
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
