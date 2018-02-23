import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import CharacterList from './components/CharaterList'
import SelectedCharacter from './components/SelectedCharacter'

class SelectPage extends React.Component {
  handleConfirmPlayerOne = () => () => {
    const { actions } = this.props

    actions.confirmPlayerOne()
  }

  handleConfirmPlayerTwo = () => () => {
    const { actions } = this.props

    actions.confirmPlayerTwo()
  }

  renderSelectPage = () => {
    const { dbz } = this.props

    if (dbz.start) {
      return (
        <div>
          {dbz.player1.character && (
            <SelectedCharacter
              color="red"
              player={dbz.player1}
              buttonAnimation={!dbz.player1.isPlayerReady ? 'bounceInLeft' : 'fadeOutUp'}
              nameAnimation={!dbz.finish ? 'fadeInUp' : 'bounceOutLeft'}
              isPlayerReady="get-closer-player1"
              containerAnimation={!dbz.finishSelection ? 'fadeInLeft' : 'fadeOutLeft'}
              onConfirm={this.handleConfirmPlayerOne()}
            />
          )}
          <CharacterList/>
          {dbz.player1.isPlayerReady && dbz.player2.character && (
            <SelectedCharacter
              color="blue"
              player={dbz.player2}
              buttonAnimation={!dbz.player2.isPlayerReady ? 'bounceInRight' : 'fadeOutUp'}
              nameAnimation={!dbz.finish ? 'fadeInUp' : 'bounceOutRight'}
              isPlayerReady="get-closer-player2"
              containerAnimation={!dbz.finishSelection ? 'fadeInRight' : 'fadeOutRight'}
              className="player-2"
              isPlayer2={true}
              onConfirm={this.handleConfirmPlayerTwo()}
            />
          )}
        </div>
      )
    }

    return null
  }

  render() {
    return this.renderSelectPage()
  }
}

export default connect(
  (state) => ({
    dbz: state.dbz,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(SelectPage)