import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
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

  renderLogo = () => {
    return (
      <div className="logo-container animated rotateIn">
        <img src={require('../../../../../img/logo.png')} alt="dragon ball"/>
      </div>
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

  render() {
    return (
      <div className="character-list-container animated bounceInUp">
        {this.renderLogo()}
        {this.renderCharacterList()}
        {this.renderHeadingMessage()}
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
