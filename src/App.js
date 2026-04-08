import React from 'react';
import './index.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

const App = () => {
  const adminUser = { nom: 'Emma Lopez', photo: '/user.jpeg' };
  
  // 1. On crée plusieurs listes de courses différentes
  const fruits = ['Banane', 'Ananas', 'Mangue'];
  const legumes = ['Tomate', 'Oignon', 'Pomme de terre', 'Carotte'];
  const nettoyage = ['Savon', 'Javel', 'Éponge'];

  // 2. On crée un vrai tableau (Array) avec plusieurs voitures
  const mesVoitures = [
    { id: 1, marque: 'Dacia', modele: 'Sandero', couleur: 'Gris' },
    { id: 2, marque: 'Peugeot', modele: '208', couleur: 'Rouge' },
    { id: 3, marque: 'Hyundai', modele: 'Tucson', couleur: 'Noir' }
  ];

  return (
    <main>
      <HelloWorld />
      <Greeting prenom="SALMA" />
      <Profil utilisateur={adminUser} taille={80} />

      <h2>Mes véhicules</h2>
      {/* On utilise .map() pour boucler sur le tableau et afficher une <Voiture /> pour chacune */}
      {mesVoitures.map((v) => (
        <Voiture 
          key={v.id} 
          brand={v.marque} 
          model={v.modele} 
          color={v.couleur} 
        />
      ))}
      
      <h2>Mes listes de courses</h2>
      {/* On appelle le même composant 3 fois avec des données différentes ! */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <ListeCourses items={fruits} />
        </div>
        <div style={{ flex: 1 }}>
          <ListeCourses items={legumes} />
        </div>
        <div style={{ flex: 1 }}>
          <ListeCourses items={nettoyage} />
        </div>
      </div>
    </main>
  );
};

export default App;