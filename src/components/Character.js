import React from "react";

const Character = ({ character }) => (
  <div className="character mx-auto">
    <div className="character-header">
      <img src={character.image} alt="" className="character-img" />
      <h4 className="character-name">{character.name}</h4>
    </div>
    <div className="character-body">
      <div className="character-schema">
        <span className="character-key">status</span>
        <span className="character-value">{character.status}</span>
      </div>
      <div className="character-schema">
        <span className="character-key">species</span>
        <span className="character-value">{character.species}</span>
      </div>
      <div className="character-schema">
        <span className="character-key">gender</span>
        <span className="character-value">{character.gender}</span>
      </div>
      <div className="character-schema">
        <span className="character-key">origin</span>
        <span className="character-value">{character.origin.name}</span>
      </div>
      <div className="character-schema last-key">
        <span className="character-key">last location</span>
        <span className="character-value">{character.location.name}</span>
      </div>
    </div>
  </div>
)

export default Character;