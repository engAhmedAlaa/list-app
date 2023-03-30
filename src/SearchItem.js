import { FaSearch } from 'react-icons/fa';

function SearchItem({ searchValue, handleSearchItem }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem"></label>
      <input
        id="searchItem"
        type="text"
        value={searchValue}
        onChange={handleSearchItem}
        placeholder="Search Item"
      />
      <div className="search-icon">
        <FaSearch />
      </div>
    </form>
  );
}

export default SearchItem;
