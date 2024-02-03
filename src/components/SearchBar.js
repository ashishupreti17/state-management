import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("oceans");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter a text to search</label>
        <input
          type="text"
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
