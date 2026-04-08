import React from 'react';
import PropTypes from 'prop-types';

const Profil = ({ utilisateur, taille = 120 }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: 'fit-content' }}>
      <img 
        src={utilisateur.photo} 
        alt={`Photo de ${utilisateur.nom}`} 
        style={{ width: taille, height: 'auto', borderRadius: '50%' }} 
      />
      <h3>Nom : {utilisateur.nom}</h3>
    </div>
  );
};

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

export default Profil;