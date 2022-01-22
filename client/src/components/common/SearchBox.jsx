import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import styles from "../styles/header.module.css";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/shop/search/${keyword}`);
    } else {
      history.push("/shop");
    }
  };

  return (
    <div>
      <form className={styles.search_form} onSubmit={submitHandler}>
        <input
          className={styles.search_input}
          type='text'
          name='q'
          placeholder='Search..'
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className={styles.search_button} type='submit'>
          <Search className={styles.search_icon} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
