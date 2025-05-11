import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = () => {
    const dictionary = {
      example: "A representative form or pattern.",
      test: "A procedure intended to establish the quality of something.",
    };

    if (dictionary[searchQuery]) {
      setSearchResult(dictionary[searchQuery]);
      setSearchError(null);
    } else {
      setSearchError("Word not found.");
      setSearchResult(null);
    }
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
      />
      {searchResult && <p>Definition: {searchResult}</p>}
      {searchError && <p style={{ color: "red" }}>{searchError}</p>}
    </div>
  );
}

export default App;