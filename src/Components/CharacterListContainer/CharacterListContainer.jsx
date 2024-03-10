import { useEffect } from "react";
import { useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { LayouCharacters } from "../LayoutCharacters/LayouCharacters";

export const CharacterListContainer = () => {

    const [characters, setCharacters] = useState([]);

    const [page, setPage] = useState(1);


    const getCharacters = async ()=>{
        const resp = await fetch (`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await resp.json();
        setCharacters(data.results);
        
        
    }
 
    useEffect( () => { 

        getCharacters();
        
     },[page] )

  return (

   <div className='container d-flex flex-column align-items-center'>
    <CharacterList characters={characters}/>

    {page > 1 && <button onClick={() => { setPage(page - 1) }}>Back</button>} 
    
    <strong>Page {page}</strong>
    <button onClick={() => { setPage(page + 1) }}>Next</button>
   </div>

    
 
  );
};
``