import React from 'react';
import './App.css';
import pokemons from './data';
import HandleClickNext from './HandleClickNext';
import PokemonProfile from './PokemonProfile';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      indexDePokemon: 0,
    }
  }

  handleClick = () => {
    this.state.indexDePokemon === pokemons.length - 1 ?
      console.log('Nao tem mais') :
    
    this.setState((estadoAnterior, _props) => ({
      indexDePokemon: estadoAnterior.indexDePokemon + 1
    }))
  }

  render() {
    return (
      <div>
        <div className="App">
          <PokemonProfile pokemons={pokemons[this.state.indexDePokemon]} />
        </div>
        <div>
          <HandleClickNext handleClick={this.handleClick}/>
        </div>
      </div>
      

    ) 
  }
}

export default App;