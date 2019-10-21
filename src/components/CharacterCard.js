import React from "react";

export default function CharacterCard() {
  console.log("This is member", character)
  return(
    <div className = "cards">
           { props.characterList.map( (character,index) => (                
                <div className = "cards-inner" key = {index}>                  
                    <h2>{character.name}</h2>                    
                </div>
            ))}

        </div>
  );
}
