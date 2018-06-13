import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../reducer'
import LogoAnimated from '../../../../components/LogoAnimated'
import CharacterListItem from './components/CharacterListItem'
import ButtonAnimated from '../../../../components/ButtonAnimated'
import './style.scss'

class CharacterList extends React.Component {
  state = {
    hideMenu: false,
  }

  componentWillReceiveProps(nextProps) {

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
    const animation = !dbz.finishSelection ? 'rotateIn' : 'rotateOut'
    return (
      <LogoAnimated animation={animation}/>
    )
  }

  renderCharacterList() {
    const { dbz } = this.props;
    const { hideMenu } = this.state
    const player1Active = dbz.player1.character && dbz.player1.character.name
    const player2Active = dbz.player2.character && dbz.player2.character.name
    const animation = dbz.player2.isPlayerReady && 'animated zoomOutUp'
    const hideMenuList = hideMenu && 'hide-menu'

    return (
      <div className={`character-list ${animation} ${hideMenuList}`}>
        {dbz.characters.map((character) => {
          return (
            <CharacterListItem
              dbz={dbz}
              key={character.name}
              character={character}
              player1Active={player1Active}
              player2Active={player2Active}
              onSelectCharacter={this.handleSelectCharacter(character)}
            />
          )
        })}
      </div>
    )
  }

  renderHeadingMessage = () => {
    const { dbz } = this.props
    const isPlayerOneReady = dbz.player1.isPlayerReady
    const isPlayerTwoReady = dbz.player2.isPlayerReady
    const playerOneAnimation = !isPlayerOneReady && 'bounce'
    const playerTwoAnimation = !isPlayerTwoReady ? 'bounceInUp' : 'fadeOutUp'

    return (
      <div>
        {!isPlayerOneReady ? (
          <div className={`heading-container red animated ${playerOneAnimation}`}>
            <h1>Select Player One</h1>
          </div>
        ) : (
          <div className={`heading-container blue animated ${playerTwoAnimation}`}>
            <h1>Select Player Two</h1>
          </div>
        )}
      </div>
    )
  }

  renderStartFightButton = () => {
    const { dbz } = this.props
    const isPlayerTwoReady = dbz.player2.isPlayerReady
    const animation = !dbz.finishSelection ? 'zoomInDown' : 'zoomOut'

    if (isPlayerTwoReady) {
      return (
        <div className="heading-container">
          <ButtonAnimated
            waiting={true}
            animation={animation}
            content={'Start Fight'}
            onClick={this.handleStartFight()}
          />
        </div>
      )
    }
  }

  render() {
    const { dbz } = this.props
    const animation = !dbz.finish ? 'bounceInUp' : 'bounceOutDown'

    return (
      <div className={`character-list-container animated ${animation}`}>
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
