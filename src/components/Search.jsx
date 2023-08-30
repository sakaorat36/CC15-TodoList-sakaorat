import { FaSearch } from "react-icons/fa";
import '../index.scss';


function SearchBar() {
  return (
    <div className="search">
      <span className="search__icon">
        <FaSearch />
      </span>
      <input type="text" className="search__input" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
