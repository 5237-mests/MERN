import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/">Goal Setter</Link>
        </div>
        <ul className="header-ul">
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
