import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import LogoAnimated from '../../../../components/LogoAnimated'
import ButtonAnimated from '../../../../components/ButtonAnimated'
import './style.scss'

class CharacterList extends React.Component {
  state = {
    hideMenu: false,
  }

  componentWillReceiveProps(nextProps) {
    const { dbz } = this.props
    console.log('dbz.player2.isPlayerReady', nextProps.dbz.player2.isPlayerReady)

    if (nextProps.dbz.player2.isPlayerReady) {
      setTimeout(() => (
        this.setState({
          hideMenu: true,
        })
      ), 1000)
    }
  }

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
    const { dbz } = this.props
    return (
      <LogoAnimated animation={!dbz.finishSelection ? 'rotateIn' : 'rotateOut'} />
    )
  }

  renderCharacterList() {
    const { dbz } = this.props;
    const { hideMenu } = this.state
    const player1Active = dbz.player1.character && dbz.player1.character.name
    const player2Active = dbz.player2.character && dbz.player2.character.name
    console.log('hideMenu', hideMenu)

    return (
      <div className={`character-list ${dbz.player2.isPlayerReady && 'animated zoomOutUp'} ${hideMenu && 'hide-menu'}`}>
        {dbz.characters.map((character) => {
          return (
            <div
              key={character.name}
              className={`character ${dbz.player1.isPlayerReady ? 'player2' : 'player1'} ${player1Active === character.name && 'active-player1'} ${player2Active === character.name && 'active-player2'}`}
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
        <div className={`heading-container red animated ${!dbz.player1.isPlayerReady && 'bounce'}`}>
          <h1>Select Player One</h1>
        </div>
        ) : (
          <div className={`heading-container blue animated ${!dbz.player2.isPlayerReady ? 'bounceInUp' : 'fadeOutUp'}`}>
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
          <ButtonAnimated
            animation={!dbz.finishSelection ? 'zoomInDown' : 'zoomOut'}
            waiting={true}
            onClick={this.handleStartFight()}
            content={'Start Fight'}
          />
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
