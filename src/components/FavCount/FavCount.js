import React, { useState } from 'react';
import "./FavCount.css";

function FavCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(1);

    const onAddClick = () => {
        if (stock > 0) {
            setCount(1);
          } else setCount(0);
        onAdd(count);
    };


    return (
        <div className="Favorite text-center">
            <button className='btn btn-success btnMore' onClick={onAddClick}>Agregar como favorito</button>
        </div>
    );
};

export default FavCount;


