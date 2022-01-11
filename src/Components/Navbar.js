import {Link} from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to={"/"} className="Logo">
        <img src="/Logo.png" width="180px" alt="Logo"></img>
      </Link>
      <ul>
        <li></li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="#Filmes">Movies</a>
        </li>
        <li>
          <a href="#Series">Tv Shows</a>
        </li>
        <a href='https://www.linkedin.com/in/janpetermerkel/'>
          <li className="Criador">
            Creator
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
