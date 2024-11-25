import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchEntry } from "../redux/reducer/SearchSlice";
import { useNavigate } from "react-router-dom";

const From = () => {
  const dispatch = useDispatch();
  const searchEntry = useSelector((state) => state.search.searchEntry);
  const navigate = useNavigate();

  const updateSearchInput = (e) => {
    console.log("e", e.target.value);

    dispatch(setSearchEntry(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchEntry.trim()) {
      navigate(`/search/${searchEntry}`);
    }
  };

  return (
    <>
      <div className="search-form" onClick={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search..."
          value={searchEntry}
          onChange={updateSearchInput}
        />
        {searchEntry && (
          <button className="search-btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default From;