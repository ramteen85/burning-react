import React from 'react';
import styles from './css/SearchField.module.css';

const SearchField = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label className={styles.label}>
        From:
        <input type="text" onChange={props.onChangeOrigin} />
      </label>
      <label className={styles.label}>
        To:
        <input type="text" onChange={props.onChangeDestination} />
      </label>
      <input type="submit" value="Search Flights"/>
    </form>
  );
};

export default SearchField;
