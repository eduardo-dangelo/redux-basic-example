import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import './style.scss'

class SelectedCharacter extends React.Component {
  renderPLayerImage = () => {
    const { player, isPlayer2 } = this.props
    return (
      <div className={`character ${isPlayer2 && 'p2'} animated ${player.isPlayerReady && 'pulse'}`}>
        <img src={player.character.full} alt={player.character.name}/>
      </div>
    )
  }

  renderPlayerName = () => {
    const { player, color, nameAnimation } = this.props

    return (
      <div className={`display-name-container ${color} animated ${nameAnimation}`}>
        <h1>{player.character.name}</h1>
      </div>
    )
  }

  renderConfirmButton = () => {
    const { onConfirm, buttonAnimation} = this.props
    return (
      <div className={`select-btn-container animated ${buttonAnimation}`}>
        <button className="action-btn waiting" onClick={onConfirm}>
          Select
        </button>
      </div>
    )
  }

  render() {
    const { containerAnimation, isPlayerReady, dbz, className } = this.props
    return (
      <div
        className={`character-container animated
        ${dbz.player2.isPlayerReady && isPlayerReady}
        ${containerAnimation} ${className}`}
      >
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