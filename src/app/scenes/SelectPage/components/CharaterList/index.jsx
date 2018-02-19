import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import LogoAnimated from '../../../../components/LogoAnimated'
import './style.scss'

class CharacterList extends React.Component {
  handleSelectCharacter = (character) => () => {
    const { dbz, actions } = this.props

    if (!dbz.player1.isPlayerReady) {
      actions.selectPlayerOne(character)
    } 
    
    if (dbz.player1.isPlayerReady && !dbz.player2.isPlayerReady) {
      actions.selectPlayerTwo(character)
    }
  }

  handleStartFight = () => () => {
    const { actions } = this.props

    actions.finishSelection()

    setTimeout(() => (
      actions.loadFight()
    ), 1000)
  }

  renderLogo = () => {
    return (
      <LogoAnimated animation="rotateIn" />
    )
  }

  renderCharacterList() {
    const { dbz } = this.props;

    return (
      <div className="character-list">
        {dbz.characters.map((character) => {
          // const itemClassName = activeItem && activeItem.title === character.title;
          return (
            <div
              key={character.name}
              className={`character ${!character.icon && 'space'}`}
              onClick={this.handleSelectCharacter(character)}
            >
              <img src={character.icon} alt={character.name}/>
            </div>
          )
        })}
      </div>
    )
  }

  renderHeadingMessage = () => {
    const { dbz } = this.props

    return (
      <div>
        {!dbz.player1.isPlayerReady ? (
        <div className={`heading-container animated ${!dbz.player1.isPlayerReady && 'bounce'}`}>
          <h1>Select Player One</h1>
        </div>
        ) : (
          <div className={`heading-container animated ${!dbz.player2.isPlayerReady ? 'bounceInUp' : 'fadeOutUp'}`}>
            <h1>Select Player Two</h1>
          </div>
        )}
      </div>
    )
  }

  renderStartFightButton = () => {
    const { dbz } = this.props

    if (dbz.player2.isPlayerReady) {
      return (
        <div className="heading-container">
          <Button className="action-btn" onClick={this.handleStartFight()}>
            Start Fight
          </Button>
        </div>
      )
    }

    return null
  }

  render() {
    const { dbz } = this.props
    return (
      <div className={`character-list-container animated ${!dbz.finish ? 'bounceInUp' : 'bounceOutDown'}`}>
        {this.renderLogo()}
        {this.renderCharacterList()}
        {this.renderHeadingMessage()}
        {this.renderStartFightButton()}
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
)(CharacterList)