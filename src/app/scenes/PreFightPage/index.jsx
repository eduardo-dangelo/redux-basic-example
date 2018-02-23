import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import LogoAnimated from '../../components/LogoAnimated'
import './style.scss'

class PreFightPage extends React.Component {
  state = {
    fadeOut: false,
  }

  componentWillMount() {
    const { actions, dbz } = this.props

    setTimeout(() => (
      this.setState({
        fadeOut: true,
      })
    ), 5000)

    setTimeout(() => (
      actions.restart()
    ), 6000)
  }

  renderPreFightPage = () => {
    const { dbz } = this.props
    const { fadeOut } = this.state

    if (dbz.loadFight) {
      return (
        <div className="pre-fight-page-container">
          <div className={`character-hero-container player1 animated ${!fadeOut ? 'fadeInLeft' : 'fadeOutLeft'}`}>
            <img src={dbz.player1.character.hero} alt="player 1"/>
            <div className={`display-name-container red animated`}>
              <h1>{dbz.player1.character.name}</h1>
            </div>
          </div>
          <div className="logo-vs-container">
            <LogoAnimated animation={!fadeOut ? 'rotateIn' : 'rotateOut'}/>
            <div className={`vs-container animated ${!fadeOut ? 'bounceInUp' : 'bounceOutDown'}`}>
              <img src={require('../../../img/vs.png')} alt="vs"/>
            </div>
          </div>
          <div className={`character-hero-container player2 animated ${!fadeOut ? 'fadeInRight' : 'fadeOutRight'}`}>
            <img src={dbz.player2.character.hero} alt="player 2"/>
            <div className={`display-name-container blue animated`}>
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