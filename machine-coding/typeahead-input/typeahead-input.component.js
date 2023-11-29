import { names } from "./typeahead-input.data.js";
import { useState, useEffect } from "react";

const maxLimit = 10;
export const Suggestions = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      setSuggestions(names.filter((item) => item.includes(query)));
    }
  }, [query]);

  return (
    <div>
      <input
        placeholder="Start typing to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {query !== "" && suggestions.length === 0 ? (
          <p>No results found</p>
        ) : null}
        {suggestions.slice(0, maxLimit).map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};
