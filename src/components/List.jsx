import React,{useState,useEffect} from 'react';
import Character from './Character';

const List = () => {
    const [characters,setCharacters] = useState([])

    useEffect(() => {
        try{
            fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            })
        }catch(err){
            console.log(err)
        }
    }, [])
    return(
        <div>
            {characters.map(c => {
                return <Character image={c.image} name={c.name} id={c.id} key={c.id} />
            })}
        </div>
    );
};

export default List;