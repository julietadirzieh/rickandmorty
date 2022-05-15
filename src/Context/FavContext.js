import React, { useContext, useState, createContext } from 'react';

export const FavContext = createContext();

export const useFavContext = () => useContext(FavContext);

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([]);

    const isInFav = (id) => fav.some((item) => item.id === id);

    const addFav = (item, quantity) => {
        if (isInFav(item.id)) {
            const newFav = fav.map((itemElement) => {
                if (itemElement.id === item.id) {
                    return { ...itemElement, quantity: itemElement.quantity + quantity };
                } else return itemElement;
            });
            setFav(newFav);
        } else {
            setFav((prev) => [...prev, { ...item, quantity }]);
        }
    }

    const removeFav = (itemid) => {
        const newFav1 = fav.filter((item) => item.id !== itemid);
        setFav(newFav1);
    };

    const clear = () => setFav([]);

    const totalQuantity = fav.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    return (
        <FavContext.Provider value={{ fav, addFav, removeFav, clear, totalQuantity }}>
            {children}
        </FavContext.Provider>
    );
};