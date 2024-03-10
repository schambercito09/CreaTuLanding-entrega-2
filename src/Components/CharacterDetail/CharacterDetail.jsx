

export const CharacterDetail = ({image, name, species, gender, location}) => {
  return (
    <>
    <div className="container p-3 border border-2 rounded-4 w-25">
        <div>
            <img src={image} alt="" />
        </div>
        <p>Nombre:{name}</p>
        <p>Especie:{species}</p>
        <p>Genero:{gender}</p>
        <p>Planeta:{location.name}</p>
    </div>
    <div className="container p-3 w-25">
        <Link to="/">
        <button className="btn btn-dark">Volver</button>
        </Link>
    </div>
    
    </>
  )
}
