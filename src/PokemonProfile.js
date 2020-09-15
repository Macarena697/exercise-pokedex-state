import React from 'react';
import Pokemons from './Pokemons';

class PokemonProfile extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <div>
        <h1>POKEMONS</h1>
        <Pokemons 
          name={name}
          type={type}
          weight={averageWeight.value}
          weightUnit={averageWeight.measurementUnit}
          img={image}
        />
      </div>
    );
  };
};

export default PokemonProfile;

