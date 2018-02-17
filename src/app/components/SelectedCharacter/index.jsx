import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class SelectedCharacter extends React.Component {
  handleConfirmPlayerOne = () => {
    const { actions } = this.props

    actions.confirmPlayerOne()
  }

  render() {
    const { player, onConfirm, dbz, className } = this.props
    return (
      <div className={className}>
        <div className="character">
          <img src={player.full} alt={player.name}/>
        </div>
        <div className="select-btn-container">
          <button className="select-btn" onClick={onConfirm}>
            Select
          </button>
        </div>
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