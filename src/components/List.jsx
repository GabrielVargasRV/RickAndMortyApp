import React, { useState, useEffect } from "react";
import Character from "./Character";
import "./style/List.css";
const List = () => {
  const [state, setState] = useState({
      nextPage: 1,
      loading: true,
      error: false,
      data:[]
  });


  useEffect(() => {
    try{
        loadCharacters()
    }catch(err){
        setState({
            loading:false,
            error: true
        })
    }
  }, []);

  const loadCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${state.nextPage}`)
    .then((res) => res.json())
    .then((data) => {
      setState({
          nextPage: state.nextPage + 1,
          loading: false,
          error: false,
          data: [].concat(state.data,data.results)
      });
    });
  }

  return (
    <div className="List" >
      { state.loading ? <h2>Loading...</h2> :state.data.map((c) => {
        return <Character image={c.image} name={c.name} id={c.id} key={c.id} />;
      })}
      {!state.loading && (
          <button className="loadmore" onClick={loadCharacters} >Load More</button>
      )}
    </div>
  );
};

export default List;
