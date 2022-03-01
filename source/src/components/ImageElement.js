import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from './Image';

function ImageElement() {
  const { allData } = useContext(Context);
  
  // Returning only 6 elements from the data objects
  const imageElements = allData.slice(0,6).map((img) => (
    <Image key={img.id} img={img} />
  ));

  return (
    <div className='img-container'>
      {imageElements}
    </div>
  );
}

export default ImageElement;
