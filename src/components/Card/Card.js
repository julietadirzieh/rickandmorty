import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useFavContext } from '../../Context/FavContext';

const Card = ({ page, results }) => {
  const { IsInFav } = useFavContext();

  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-white"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4 textColor">{name}</div>
              {IsInFav ? (
                <h1>Seleccionado como favorito</h1>
            ) : (
                <></>
            )}</div>
            </div>
          {(() => {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
              </div>
            );
          })()}
        </Link>
      );
    });
  } else {
    display = "No se encuentra el personaje :/";
  }

  return <>{display}</>;
};

export default Card;