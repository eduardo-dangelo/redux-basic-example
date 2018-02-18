import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class PreFightPage extends React.Component {
  renderPreFightPage = () => {
    const { dbz } = this.props

    if (dbz.loadFight) {
      return (
        <div className="pre-fight-page-container">
          <div className="character-hero-container player1 animated fadeInLeft">
            <img src={dbz.player1.character.hero} alt="player 1"/>
            <div className={`display-name-container animated`}>
              <h1>{dbz.player1.character.name}</h1>
            </div>
          </div>
          <div className="logo-vs-container">
            <div className="logo-container animated rotateIn">
              <img src={require('../../../img/logo.png')} alt="dbz"/>
            </div>
            <div className="vs-container animated bounceInUp">
              <img src={require('../../../img/vs.png')} alt="vs"/>
            </div>
          </div>
          <div className="character-hero-container player2 animated fadeInRight">
            <img src={dbz.player2.character.hero} alt="player 2"/>
            <div className={`display-name-container animated`}>
              <h1>{dbz.player2.character.name}</h1>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  render() {
    return this.renderPreFightPage()
  }
}

export default connect(
  (state) => ({
    dbz: state.dbz,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  }),
)(PreFightPage)