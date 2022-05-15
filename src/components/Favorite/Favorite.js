import React from 'react';
import { useFavContext } from '../../Context/FavContext';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "../../App.css";

const Favorite = () => {

    let { id } = useParams();

    const { fav, removeFav, clear, totalQuantity } = useFavContext();

    let api = `https://rickandmortyapi.com/api/character/${id}`;


    return (
        <div className="App">
            {(totalQuantity > 0) ? (
                <div className='text-center'>
                     <h1 className="text-center mb-3">Personajes Favoritos</h1>
                    <button className="btn btn-success btn-lg btnCard" onClick={clear}>Borrar todos los favoritos</button>
                    {fav.map((item) => {
                        return (
                            <div className="container d-flex justify-content-center mb-5" key={item.id}>
                                <div className="d-flex card containerCard2 flex-column gap-3">
                                    <h1 className="text-center">{item.name}</h1>
                                    <img className="img-fluid imgCard2 mx-auto d-block rounded" src={item.image} alt="" />
                                    <div className="content">
                                        <div className="textColor">
                                            <span className="fw-bold">Estado: </span>
                                            {item.status}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Especie: </span>
                                            {item.species}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Tipo: </span>
                                            {item.type}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Género: </span>
                                            {item.gender}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Locación: </span>
                                            {item.location?.name}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Origen: </span>
                                            {item.origin?.name}
                                        </div>
                                        <div className="textColor">
                                            <span className="fw-bold">Creado: </span>
                                            {item.created}
                                        </div>
                                        <p><button className="btn btn-success btn-lg btnCard" onClick={() => removeFav(item.id)}>Eliminar Personaje como favorito</button></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    <button className="btn btn-success btn-lg" onClick={clear}>Borrar todos los favoritos</button>
                    <div className=' text-center'>
                        <Link to="/">
                            <button className='btn btn-success btn-lg btnCard'>Ver más personajes</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='text-center'>
                    <h2>No agregaste ningún personaje como favorito :(</h2>
                    <Link to="/">
                        <button className='btn btn-success btn-lg btnCard'>Dirigíte a la lista de personajes para seleccionar tu favorito.</button>
                    </Link>
                </div>
            )
            }
        </div>
    )
};

export default Favorite;