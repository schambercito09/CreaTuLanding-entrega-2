import { useEffect, useState } from "react";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";
import { useParams } from "react-router-dom";

export const CharacterDetailContainer = () => {
    const [character, setCharacter] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();


    const getCharacter = async (id)=>{
        const resp  = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await resp.json();
        setCharacter(data); 
        setIsLoading(false);
    };

    useEffect( () => { 
        console.log(id)
        getCharacter();
     }, [])

  return (
    <>
    {isLoading ? <h2>Cargando...</h2> :(
        <CharacterDetail 
         gender={character.gender} 
         image={character.image} 
         location={character.location} 
         name={character.name} 
         species={character.species}
    />
    )}
    </>
  );
};



