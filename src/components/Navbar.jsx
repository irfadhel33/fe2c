import { Link } from "react-router-dom";
import chillLogo from "../assets/images/CHILL.png";
import avatar from "../assets/images/avatar.png";

function Navbar({ search, setSearch}) {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo" aria-label="Chill beranda">
        <img src={chillLogo} alt="CHILL" />
      </Link>

      <div className="navbar-menu">
        <Link to="/home">Series</Link>
        <Link to="/home">Film</Link>
        <Link to="/home">Daftar Saya</Link>
        <div className="navbar-search">
          
          <input 
            className="navbar-search-input"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>

      <Link to="/login" className="navbar-profile" aria-label="Buka profil">
        <img src={avatar} alt="" />
        <span>Profil</span>
        <span className="navbar-profile__chevron" aria-hidden="true">⌄</span>
      </Link>
    </nav>
  );
}

export default Navbar;
