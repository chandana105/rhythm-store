import Card from "./MainContents/Card";
const Main = () => {
  return (
    <div className="content">
      <main>
        <div className="search-container sort">
          <div className="search-box search">
            <span>Sort by:</span>
            <span>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </span>
          </div>
        </div>
        <div className="products">
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Main;
