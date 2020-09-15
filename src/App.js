import React from 'react';
import './App.css';
import pokemons from './data';
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
          <button className="button-next" onClick={this.handleClick}>SIGUENTE</button>
        </div>
      </div>
      

    ) 
  }
}

export default App;