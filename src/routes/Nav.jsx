import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <header>
        <h1>Travel Tales</h1>
        <nav>
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/create">
            <button>CREATE POST</button>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Nav;