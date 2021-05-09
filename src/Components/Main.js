const Main = () => {
  return (
    <div className="content">
      <main>
        <div class="search-container main">
          <div class="search-box search">
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
      </main>
    </div>
  );
};

export default Main;
