import React from 'react';
import Fashion from '../../assets/fashion.jpg';

const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage-description">
        <h1>LIFE ISN'T PERFECT BUT YOUR OUTFIT CAN BE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus eos voluptates cum! Assumenda dolorum consectetur,
          laboriosam dignissimos ad quo, nihil reprehenderit, repudiandae nisi
          in sed. Ullam corrupti quisquam, ut quae tempore quaerat quam itaque
          doloremque vel aperiam sit aut sunt ipsum aspernatur, blanditiis quas.
          Corporis laborum voluptatum natus dolore rerum!
        </p>
      </div>
      <div className="homepage-image">
        <img src={Fashion} alt="Fashion Showcase"></img>
      </div>
    </div>
  );
};

export default Home;
