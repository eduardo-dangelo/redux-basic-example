import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class SelectedCharacter extends React.Component {
  renderPLayerImage = () => {
    const { player } = this.props
    return (
      <div className="character">
        <img src={player.full} alt={player.name}/>
      </div>
    )
  }

  renderPlayerName = () => {
    const { player, animatedName, dbz } = this.props
    if (dbz.isPlayer1Ready) {
      return (
        <div className={`display-name-container animated ${animatedName}`}>
          <h1>{player.name}</h1>
        </div>
      )
    }

    return null
  }

  renderConfirmButton = () => {
    const { onConfirm, dbz, animatedButton, animatedButtonOut } = this.props
    return (
      <div className={`select-btn-container animated ${!dbz.isPlayer1Ready ? animatedButton : animatedButtonOut}`}>
        <button className="select-btn" onClick={onConfirm}>
          Select
        </button>
      </div>
    )
  }

  render() {
    const { className } = this.props
    return (
      <div className={className}>
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