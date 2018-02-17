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
              player={dbz.player1}
              animatedButton="bounceInLeft"
              animatedButtonOut="fadeOutUp"
              animatedName="bounceInLeft"
              animatedHero="player1 fadeIn"
              className="character-container animated fadeInLeft"
              onConfirm={this.handleConfirmPlayerOne()}
            />
          )}
          <CharacterList/>
          {dbz.player1.isPlayerReady && dbz.player2.character && (
            <SelectedCharacter
              player={dbz.player2}
              animatedButton="bounceInRight"
              animatedButtonOut="fadeOutUp"
              animatedName="bounceInRight"
              animatedHero="player2 fadeIn"
              className="character-container player-2 animated fadeInRight"
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