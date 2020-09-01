import React from "react";

export default function SearchBar() {
  function handleInputChange() {}
  return (
    <div className="searchForm">
      <form style={{ width: "100%", padding: 10 }}>
        <input
          type="text"
          id="filter"
          placeholder="Search for names or email......"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
/*<div>
        {this.state.data.map((i) => (
          <p>{i.name}</p>
        ))}
      </div>>*/
