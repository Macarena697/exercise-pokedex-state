import React from 'react';

class HandleClickNext extends React.Component {

  render() {
    const { handleClick }=this.props
    return <button className="button-next" onClick={handleClick}>SIGUENTE</button>
  }
}

export default HandleClickNext;