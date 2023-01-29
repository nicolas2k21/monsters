import "./search-box-style.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
