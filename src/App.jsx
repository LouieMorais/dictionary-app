import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DefinitionDisplay from "./components/DefinitionDisplay";

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
      <DefinitionDisplay result={searchResult} error={searchError} />
    </div>
  );
}

export default App;