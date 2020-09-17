import React from 'react';

class PokemonProfile extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <div>
        <h1>POKEMONS</h1>
        <div className='pokemon-show'>
          Nome: {name}<br></br> 
          Tipo: {type}<br></br> 
          Peso: {averageWeight.value}{averageWeight.measurementUnit}<br></br>
          <img src={image} alt='FOTO'></img>
        </div>
      </div>
    );
  };
};

export default PokemonProfile;
