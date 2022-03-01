import React from 'react';
import AllImageElements from '../components/AllImagesElements';
import Footer from '../components/Footer';
import { Context } from '../Context';



export default function AllGames() {

  return (
    <div className="all-body-container fix1">
      <h1>List of all games currently available.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem accusantium quam pariatur quas asperiores sequi vero. Eaque totam, inventore reiciendis sapiente facere iusto, nulla ab aspernatur optio nam vero excepturi asperiores, provident iste. Omnis natus expedita, obcaecati voluptatem minima sit nulla alias voluptates, nobis corrupti veniam repudiandae, asperiores sapiente ipsum?</p>
      <AllImageElements/>
      <Footer/>
    </div>
  );
}
