import React from "react";

/**
 * Component to display the definition of a word or an error message.
 * @param {string} result - The definition of the searched word.
 * @param {string} error - The error message if the word is not found.
 * @returns {JSX.Element} The rendered component.
 */
function DefinitionDisplay({ result, error }) {
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (result) {
    return <p>{result}</p>;
  }
  return <p>No word searched yet.</p>;
}

export default DefinitionDisplay; 