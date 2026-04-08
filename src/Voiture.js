import React from 'react';
import PropTypes from 'prop-types';

const Voiture = ({ brand, model, color }) => (
  <ul style={{ listStyle: 'square' }}>
    <li><strong>Marque:</strong> {brand}</li>
    <li><strong>Modèle:</strong> {model}</li>
    <li><strong>Couleur:</strong> {color}</li>
  </ul>
);

Voiture.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Voiture;