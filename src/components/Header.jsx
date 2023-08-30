import './Header.scss';
import { FaHome, FaSearch } from "react-icons/fa";
import SearchBar from "./Search";


function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">
        <h1>Todo List</h1>
      </div>
      <div className="header__search">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
