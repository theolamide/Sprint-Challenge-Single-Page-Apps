import React from "react";

export default function CharacterCard() {
  return(
    <div className = "cards">
           { props.characterList.map( (character,index) => (
                // console.log("This is member", character)
                <div className = "cards-inner" key = {index} >
                    <h2>{character.name}</h2>                    
                </div>
            ))}

        </div>
  );
}
