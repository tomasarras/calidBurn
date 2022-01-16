import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "./index.module.css";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const { className } = props;

  return (
    <InputGroup className={styles.containerInput}>
      <FormControl
        placeholder="Buscar productos, marcas y más..."
        aria-label="Buscar productos, marcas y más..."
        aria-describedby="basic-addon2"
        type="search"
        className={`${styles.input} ${className}`}
      />
      <InputGroup.Text className="bg-white"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
    </InputGroup>
  );
};

export default Search;
