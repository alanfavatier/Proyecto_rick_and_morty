import { useState } from "react";
import styles from "./SearchBar.module.css"


/* eslint-disable react/prop-types */
const SearchBar = (props) => {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(e.target.value)
    // console.log(id)
  }
  const { onSearch } = props;
  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" placeholder="Write ID...🔍" onChange={handleChange} value={id}/>
      <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

export default SearchBar;