import React, { useState, useEffect } from "react";
// import charactersArray from "./CharacterList";


export default function SearchForm(props) {
  console.log(props)
 
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);  

      useEffect(()=> {
        const results = props.characters.filter(character =>
          // console.log('this is charcater inside of FOrm', character),
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
      }, [searchTerm]);

      const handleChange = event => {
        setSearchTerm(event.target.value);
      }


    
  return (
    <section className="search-form">
      <form>        
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search Name"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      <div className="character-list">
        <p>Search Results: </p>
          {searchResults.map(character => (                         
              <li key={character.id}>{character.name}</li>          
          ))}        
      </div>
        
    </section>
  );
}
