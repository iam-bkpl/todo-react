import React, { useState } from "react";

const Search = ({ setPlaceholderText }) => {
  const [isSearch, setIsSearch] = useState(true);
  const [btnText, setBtnText] = useState("Search");
  const [btnColor, setBtnColor] = useState("btn btn-outline-primary");

  const handleSearch = () => {
    if (isSearch) {
      setIsSearch(false);
      setBtnText("Cancel");
      setBtnColor("btn btn-outline-danger");
      setPlaceholderText("Enter something to search");
    }
    if (!isSearch) {
      setBtnText("Search");
      setBtnColor("btn btn-outline-primary");
      setIsSearch(true);
      setPlaceholderText("Enter Your todo");
    }
  };

  return (
    <div>
      <button className={btnColor} onClick={handleSearch}>
        {btnText}
      </button>
    </div>
  );
};

export default Search;
