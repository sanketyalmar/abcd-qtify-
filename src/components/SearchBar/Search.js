import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./search.css";
const SearchBar = () => {
  return (
    <div className="wrapper">
      <label htmlFor="search" className="search-label"></label>
      <input className="search" placeholder="Search a album of your choice" />
      <button className="search-btn">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
