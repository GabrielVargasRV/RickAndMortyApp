import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/ChareacterPage.css";
const CharacterPage = () => {
  let { id } = useParams();

  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data));
  }, []);

  return (
    <div className="CharacterPage">
      <div className="container">
        <img src={characterData.image} alt="" />
        <div className="info" >
          <p>{`Name: ${characterData.name}`}</p>
          <p>{`Status: ${characterData.status}`}</p>
          <p>{`Specie: ${characterData.species}`}</p>
          <p>{`Gender: ${characterData.gender}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
