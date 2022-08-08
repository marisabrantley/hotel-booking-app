import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  const renderFilter = (filter) => {
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const isChecked = props.selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
      />
    );
  };

  const filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;