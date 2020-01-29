import React, { Component } from 'react';

const SearchField = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        From:
        <input type="text" onChange={props.onChangeOrigin} />
      </label>
      <label>
        To:
        <input type="text" onChange={props.onChangeDestination} />
      </label>
    </form>
  );
};

export default SearchField;
