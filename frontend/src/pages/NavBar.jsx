import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
