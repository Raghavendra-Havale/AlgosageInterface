import "./navbar.css"

function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <button className=" gamma-logo">Gamma</button>
        </div>
        <div className="menu-link">
          <div className="hamburger-menu">
            <h3>ABX</h3>
          </div>
          <ul id="menu">
            <li>
              <a href="#home">Discover</a>
            </li>
            <li>
              <a href="#home">Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="login-network-app">
          <ul className="login-network-app">
            <button>Wallet</button>
            <button>Network</button>
            <button>App</button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
