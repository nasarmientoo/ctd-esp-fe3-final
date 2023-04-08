import React, { useEffect, useState, useContext } from "react";
import "../index.css"
import { ContextGlobal } from './utils/global.context'
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const {theme}= useContext(ContextGlobal)
  const [isFavorite, setIsFavorite] = useState()
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  const addFav = () => {
    const favoriteIndex = favorites.findIndex(fav => fav.id === id);
    if (favoriteIndex === -1) {
      favorites.push({ name, username, id });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      favorites.splice(favoriteIndex, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(false);
    }
  }

   useEffect(() => {
     if(favorites.some(fav => fav.id === id)){
       setIsFavorite(true)
     };
   }, [favorites, id]);
   
  return (
    <div className= {`card ${theme}`}>
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" className="img-dentist" alt="doctor placeholder"/>
        <p>{name}</p>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className={`favButton ${isFavorite ? 'favorite' : ''}`}>{isFavorite ? '💛' : '🖤'}</button>
    </div>
  );
};

export default Card;
