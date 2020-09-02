import React, { useState } from "react";

export default function SearchBar(params) {
  const [word, setWord] = useState("");
  let data = params;
  function handleInputChange() {
    if (word !== "") {
      let output = JSON.stringify(
        data.params.find(
          (record) =>
            record.first_name === word ||
            record.last_name === word ||
            record.email === word
        )
      );
      output !== undefined ? alert(output) : alert("Not found");
    }
  }
  return (
    <div className="searchForm">
      <input
        type="text"
        id="filter"
        value={word}
        placeholder="Search for names or email......"
        onChange={(e) => setWord(e.target.value)}
      />
      <button
        className="btn btn-success"
        onClick={handleInputChange}
        style={{ marginLeft: 5 }}
      >
        Search
      </button>
    </div>
  );
}
