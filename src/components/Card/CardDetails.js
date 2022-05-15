import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import FavCount from "../FavCount/FavCount";
import "./CardDetails.css";
import { useFavContext } from "../../Context/FavContext";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, status, species, type, gender, origin, location, image, created } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const [added, setAdded] = useState(false);

  const { addFav } = useFavContext();

  const onAdd = (quantityToAdd) => {
    addFav(fetchedData, quantityToAdd)
    setAdded(true);
  }

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex card containerCard flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid rounded" src={image} alt="" />
        <div className="content">
          <div className="">
            <span className="fw-bold textColor">Estado: </span>
            {status}
          </div>
          <div className="">
            <span className="fw-bold textColor">Especie: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold textColor">Tipo: </span>
            {type}
          </div>
          <div className="">
            <span className="fw-bold textColor">Género: </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold textColor">Locación: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold textColor">Origen: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold textColor">Creado: </span>
            {created}
          </div>
          <FavCount stock={1} initial={0} onAdd={onAdd} />
          {added ? (
            <div>
            <p>El personaje ha sido agregado exitosamente a tu lista de favoritos.</p>
            </div>
          ) : (
            <></>
          )}
          <div className="text-center">
            <Link to="/misfavoritos">
              <button className="btn btn-large btn-light btnCard">Mirá todos tus personajes favoritos.</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;