const Sidebar = () => {
  return (
    <div className="side-bar" id="side-bar">
      <div className="side-bar-box">
        <span>FILTERS</span>
        <button className="btn btn-gp bg-red ">CLEAR ALL</button>
      </div>
      <ul>
        <li>
          <label>
            <input type="checkbox" className="checkbox" />
            Include Out Of Stock
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" className="checkbox" />
            Fast Delivery Only
          </label>
        </li>
        <li>
          <label style={{ display: "block", marginTop: "1rem" }}>
            Price Range
            <input type="range" value="1000" min="0" max="1000" />
          </label>
          <span>0 to 1000</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
