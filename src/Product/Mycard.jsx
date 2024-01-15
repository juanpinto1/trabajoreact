import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';


const Product = ({
  id,
  title, 
  description, 
  image, 
}) => {
  return (
  <> 
    <div className='dogs'style={{ background: 'gray'}} >
      <div className="card product-card" style={{ background: 'antiquewhite'}}>
        <img src={image} className="card-img-top image-card" alt="image"/>
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'red' }}>{title}</h5>
        <p className="card-text">{description}</p>
        <button className='btn' onClick={selection}>Elige este perrito</button>
      </div>
      </div>
    </div>
  </>
  );
};

Product.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  
};

Product.defaultProps = {
  id: 1,
  title: 'titulo por default',
  description: 'descripcion default',
  image: 'url',
};


export default Product;

const selection = () => {
  alert('Muchas Gracias por Elegirme');
};
