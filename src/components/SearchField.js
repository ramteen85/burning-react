import React from 'react';

const SearchField = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        From:
        <input type="text" onChange={props.onChangeOrigin} />
      </label>
      <label>
        To:
        <input type="text" onChange={props.onChangeDestination} />
      </label>
      <input type="submit" value="Search Flights"/>
    </form>
  );
};

export default SearchField;
