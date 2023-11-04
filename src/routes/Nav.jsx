import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/create">
              CREATE POST
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav;