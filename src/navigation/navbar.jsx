import { Link } from "react-router-dom";

const Navbar = () => {
  function logout() {
    localStorage.removeItem("token");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            WhanDPost
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Cari
                </button>
              </form>
              <li className="nav-item">
                <Link to="/login" className="nav-link ">
                  LogIn
                </Link>
              </li>
              <li className="nav-item ">
                <Link onClick={logout} to="/login" className="nav-link ">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
