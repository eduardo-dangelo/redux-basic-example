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
    const {
      dbz,
      character,
      player1Active,
      player2Active,
      onSelectCharacter,
    } = this.props

    const { loading } = this.state
    const activePlayer = dbz.player1.isPlayerReady ? 'player2' : 'player1'
    const isPlayerOneActive = player1Active === character.name && 'active-player1'
    const isPlayerTwoActive = player2Active === character.name && 'active-player2'

    return (
      <div
        key={character.name}
        onClick={onSelectCharacter}
        className={`character ${activePlayer} ${isPlayerOneActive} ${isPlayerTwoActive}`}
      >
        <img
          src={character.icon}
          alt={character.name}
          onLoad={this.OnImageLoad}
          className={loading ? 'invisible' : 'animated fadeIn'}
        />
        {loading && <FaSpinner className="spin-menu-item"/>}
      </div>
    )
  }
}

export default CharacterListItem