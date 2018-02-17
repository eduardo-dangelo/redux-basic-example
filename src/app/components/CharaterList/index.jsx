import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class CharacterList extends React.Component {
  handleSelectCharacter = (character) => () => {
    const { dbz, actions } = this.props

    if (!dbz.isPlayer1Ready) {
      actions.selectPlayerOne(character)
    } 
    
    if (dbz.isPlayer1Ready && !dbz.isPlayer2Ready) {
      actions.selectPlayerTwo(character)
    }
  }

  renderList() {
    const { dbz } = this.props;

    return dbz.characters.map((character) => {
      // const itemClassName = activeItem && activeItem.title === character.title;

      return (
        <div className={`character ${!character.icon && 'space'}`} key={character.name} onClick={this.handleSelectCharacter(character)}>
          <img src={character.icon} alt={character.name} />
        </div>
      )
    })
  }

  render() {
    console.log('this.props.dbz', this.props.dbz)
    return (
      <div className="character-list-container animated bounceInUp">
        <div className="logo-container animated rotateIn">
          <img src={require('../../../img/logo.png')} alt=""/>
        </div>
        <div className="character-list">
          {this.renderList()}
        </div>
        <div className="heading-container animated bounce">
          <h1>Select Character</h1>
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
)(CharacterList)