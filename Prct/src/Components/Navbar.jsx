import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
