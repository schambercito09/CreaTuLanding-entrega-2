import { Character } from "../Character/Character"

export const CharacterList = ({characters}) => {
  return (
    <>
     { characters.map(character =>(
        //<Character key={character.id} name={character.name} status={character.status} image={character.image} />
        <Character key={character.id} id={character.id} {...character} />

     ))}

    </>
  )
}
