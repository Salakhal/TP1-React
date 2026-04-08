import React from 'react';

const Greeting = ({ prenom }) => {
  return (
    <section>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Bienvenue parmi nous, {prenom} !
      </p>
    </section>
  );
};

export default Greeting;