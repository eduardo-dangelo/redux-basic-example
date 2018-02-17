import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'
import CharacterList from './components/CharaterList'
import SelectedCharacter from './components/SelectedCharacter'

class App extends React.Component {
  handleConfirmPlayerOne = () => () => {
    const { actions } = this.props

    actions.confirmPlayerOne()
  }

  handleConfirmPlayerTwo = () => () => {
    const { actions } = this.props

    actions.confirmPlayerTwo()
  }

  render() {
    const { dbz } = this.props
    return (
      <div>
        {dbz.player1 && (
          <SelectedCharacter
            player={dbz.player1}
            animatedButton="bounceInLeft"
            animatedButtonOut="fadeOutUp"
            animatedName="bounceInLeft"
            className="character-container animated fadeInLeft"
            onConfirm={this.handleConfirmPlayerOne()}
          />
        )}
        <CharacterList/>
        {dbz.isPlayer1Ready && (
          <SelectedCharacter
            player={dbz.player2}
            animatedButton="bounceInRight"
            animatedButtonOut="fadeOutUp"
            animatedName="bounceInRight"
            className="character-container player-2 animated fadeInLeft"
            onConfirm={this.handleConfirmPlayerTwo()}
          />
        )}
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
)(App)