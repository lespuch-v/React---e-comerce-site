import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from './Image';



function AllImageElements() {
  const { allData } = useContext(Context);
  
  // Returning ALL elements from the data objects
  const imageElements = allData.map((imgs, i) => (
    <Image key={imgs.id} img={imgs} />
  ));

  return (
    <div className='all-games-holder'>
      {imageElements}

    </div>
  );
}

export default AllImageElements;
