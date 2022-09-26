import React from "react";
import PropTypes from 'prop-types'
import "./AnimalCard.css";
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import Card from '../Card/Card'

const AnimalCard = ({
  name,
  size,
  ...props
}) => {
  
  return (
    <Card title="Animal">
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h4>{size}kg</h4>
      <AnimalDetails 
        {...props}
      />
    </div>
    </Card>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default AnimalCard;
