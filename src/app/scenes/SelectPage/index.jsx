import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducer'
import { bindActionCreators } from 'redux'
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
              isPlayerReady="get-closer-player1"
              onConfirm={this.handleConfirmPlayerOne()}
              nameAnimation={!dbz.finish ? 'bounceInUp' : 'bounceOutLeft'}
              containerAnimation={!dbz.finishSelection ? 'fadeInLeft' : 'fadeOutLeft'}
              buttonAnimation={!dbz.player1.isPlayerReady ? 'bounceInLeft' : 'fadeOutUp'}
            />
          )}
          <CharacterList/>
          {dbz.player1.isPlayerReady && dbz.player2.character && (
            <SelectedCharacter
              color="blue"
              isPlayer2={true}
              className="player-2"
              player={dbz.player2}
              isPlayerReady="get-closer-player2"
              onConfirm={this.handleConfirmPlayerTwo()}
              nameAnimation={!dbz.finish ? 'bounceInUp' : 'bounceOutRight'}
              containerAnimation={!dbz.finishSelection ? 'fadeInRight' : 'fadeOutRight'}
              buttonAnimation={!dbz.player2.isPlayerReady ? 'bounceInRight' : 'fadeOutUp'}
            />
          )}
        </div>
      )
    }
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