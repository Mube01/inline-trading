import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">
                INLINE
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <div className="nav-link">
                      <NavLink activeClassName="active" exact to="/">
                        {" "}
                        HOME
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <NavLink activeClassName="active" to="/about">
                        {" "}
                        ABOUT
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <NavLink activeClassName="active" to="/products">
                        {" "}
                        PRODUCTS
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <NavLink activeClassName="active" to="/contact">
                        {" "}
                        CONTACT
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
