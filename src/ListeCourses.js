import React from 'react';
import PropTypes from 'prop-types';

const ListeCourses = ({ items }) => {
  return (
    <div className="shopping-list">
      <h4>Ma liste :</h4>
      <ol>
        {items.map((it, idx) => (
          <li key={`item-${idx}`}>{it}</li>
        ))}
      </ol>
    </div>
  );
};

ListeCourses.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;