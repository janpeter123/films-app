import { Route, Link, BrowserRouter , useParams} from "react-router-dom";
import "../Styles/Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to={"/"} className="Logo">
        <img src="/Logo.png" width="180px"></img>
      </Link>
      <ul>
        <li></li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"#"}>Movies</Link>
        </li>
        <li>
          <Link to={"#"}>TV Shows</Link>
        </li>
        <Link to={"#"}>
          <li className="Criador">
            <p>Creator</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
