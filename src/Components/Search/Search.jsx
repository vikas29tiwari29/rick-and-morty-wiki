import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch , setPageNumber}) => {
  let handleChange = (e) => {
    setSearch(e.target.value);
    setPageNumber(1)
  };
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center  justify-content-center gap-4 mb-5">
      <input
        type="text"
        className={styles.input}
        placeholder="Search For Characters"
        onChange={handleChange}
      />
      <button type="button" className={`${styles.btn} btn btn-primary fs-5`}
      onClick={e=>e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
