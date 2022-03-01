import React, { useContext, useState, useEffect } from 'react';
import Image from '../components/Image';
import { Context } from '../Context';

function Favorites() {
  const { allData } = useContext(Context);

  const favouritesGame = allData
    .filter((item) => item.isFavourited === true)
    .map((imgs) => <Image key={imgs.id} img={imgs} />);

  return (
    <div className="all-games-holder fix1 contact-main-cont">
      {favouritesGame.length > 0 ? (
        <h1 className="fav-heading">Favorites games!</h1>
      ) : (
        <h1 className="fav-heading">You don't have any favorite Games!</h1>
      )}
      {favouritesGame}
    </div>
  );
}

export default Favorites;
