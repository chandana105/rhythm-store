import music from "../images/music.svg";

const Nav = () => {
  return (
    <nav className="header">
      <a className="logo" href="/index.html">
        <img width="80" src={ music } alt="logo" />
        <span>
          <strong> RHYTHM STORE</strong>
        </span>
      </a>
      <div className="search-container">
        <div className="search-box search">
          <i className="fas fa-search"></i>
          <span>
            <input type="text" name="" placeholder="Search..." />
          </span>
        </div>
      </div>
      <a className="home" href="/">
        <i className="fas fa-home"></i>
        Home
      </a>
      <a className="docs active" href="/docs.html">
        <i className="fas fa-file-alt"></i>
        Docs
      </a>
      <a
        className="github"
        target="blank"
        href="https://github.com/chandana105/rhythm-store"
      >
        <i className="fab fa-github"></i>
        Github
      </a>
    </nav>
  );
};

export default Nav;


