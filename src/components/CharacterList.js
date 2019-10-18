import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div> 
        <h2>Characters</h2>
        <div>
          {characters.map(character => (
          <CharacterDetails key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CharacterDetails({character}) {
  const{name,species,status} = character;
  return(
    <div>
      <p> Name: {name} </p>
      <p> Specie: {species} </p>
      <p> Status: {status} </p>
    </div>
  );
}