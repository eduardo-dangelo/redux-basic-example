import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

class CharacterList extends React.Component {
  renderList() {
    const { dbz } = this.props;

    return dbz.characters.map((character) => {
      // const itemClassName = activeItem && activeItem.title === character.title;

      return (
        <div className={'character'} key={character.name} onClick={() => null}>
          <img src={character.icon} alt={character.name} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="character-list-container">
        <div className="character-list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    dbz: state.dbz,
  })
)(CharacterList)
