import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import './style.scss'

class SelectedCharacter extends React.Component {
  renderPlayerHero = () => {
    const { player, animatedHero } = this.props
    if (player.isPlayerReady) {
      return (
        <div className={`character-hero-container animated ${player.isPlayerReady && animatedHero}`}>
          <img src={player.character.hero} alt={player.character.name}/>
        </div>
      )
    }
  }

  renderPLayerImage = () => {
    const { player , dbz, animatedCharacterOut } = this.props
    return (
      <div className={`character animated ${player.isPlayerReady && 'pulse'} ${dbz.finish && animatedCharacterOut}`}>
        <img src={player.character.full} alt={player.character.name}/>
      </div>
    )
  }

  renderPlayerName = () => {
    const { player, animatedName, animatedNameOut, dbz } = this.props
    if (player.isPlayerReady) {
      return (
        <div className={`display-name-container animated ${!dbz.finish ? animatedName : animatedNameOut}`}>
          <h1>{player.character.name}</h1>
        </div>
      )
    }

    return null
  }

  renderConfirmButton = () => {
    const { onConfirm, dbz, animatedButton, animatedButtonOut, player } = this.props
    return (
      <div className={`select-btn-container animated ${!player.isPlayerReady ? animatedButton : animatedButtonOut}`}>
        <button className="action-btn" onClick={onConfirm}>
          Select
        </button>
      </div>
    )
  }

  render() {
    const { className } = this.props
    return (
      <div className={className}>
        {/*{this.renderPlayerHero()}*/}
        {this.renderPLayerImage()}
        {this.renderPlayerName()}
        {this.renderConfirmButton()}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    dbz: state.dbz,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(SelectedCharacter)