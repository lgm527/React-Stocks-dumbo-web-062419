import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortTerm === 'Alphabetically'} onChange={(e)=>{props.setSortTerm(e.target.value)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortTerm === 'Price'} onChange={(e)=>{props.setSortTerm(e.target.value)}}/>
        Price
      </label>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => {props.setFilterTerm(e.target.value)}} value={props.filterTerm}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
