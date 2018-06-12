import React from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'

class CharacterListItem extends React.Component {
  state = {
    loading: true,
  }

  OnImageLoad = () => {
    this.setState({
      loading: false,
    })
  }

  render() {
    const { character, dbz, player1Active, player2Active, onSelectCharacter } = this.props
    const { loading } = this.state
    return (
      <div
        key={character.name}
        className={
          `character ${dbz.player1.isPlayerReady ? 'player2' : 'player1'}
          ${player1Active === character.name && 'active-player1'}
          ${player2Active === character.name && 'active-player2'}`
        }
        onClick={onSelectCharacter}
      >
        <img
          src={character.icon}
          alt={character.name}
          className={loading ? 'invisible' : 'animated fadeIn'}
          onLoad={this.OnImageLoad}
        />
        {loading && <FaSpinner className="spin-menu-item"/>}
      </div>
    )
  }
}

export default CharacterListItem