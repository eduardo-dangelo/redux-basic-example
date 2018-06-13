import React from 'react'
import { Line } from 'rc-progress'
import { connect } from 'react-redux'
import { actions } from '../../reducer'
import { bindActionCreators } from 'redux'
import FaSpinner from 'react-icons/lib/fa/spinner'
import LogoAnimated from '../../components/LogoAnimated'
import './style.scss'

class PreFightPage extends React.Component {
  state = {
    fadeOut: false,
    loadingP1: true,
    loadingP2: true,
    loadingVs: true,
    statusBar: '0'
  }

  componentWillMount() {
    const { actions } = this.props

    setTimeout(() => (
      this.setState({
        statusBar: '5',
      })
    ), 600)

    setTimeout(() => (
      this.setState({
        statusBar: '15',
      })
    ), 1000)

    setTimeout(() => (
      this.setState({
        statusBar: '20',
      })
    ), 2000)

    setTimeout(() => (
      this.setState({
        statusBar: '50',
      })
    ), 5000)

    setTimeout(() => (
      this.setState({
        statusBar: '70',
      })
    ), 6000)

    setTimeout(() => (
      this.setState({
        statusBar: '100',
      })
    ), 6500)

    setTimeout(() => (
      this.setState({
        fadeOut: true,
      })
    ), 7000)

    setTimeout(() => (
      actions.restart()
    ), 7500)
  }

  onImageLoad = (imageKey) => () => {
    if (imageKey === 'p1') {
      this.setState({
        loadingP1: false,
      })
    }

    if (imageKey === 'p2') {
      this.setState({
        loadingP2: false,
      })
    }

    if (imageKey === 'vs') {
      this.setState({
        loadingVs: false,
      })
    }
  }

  renderPreFightPage = () => {
    const { dbz } = this.props
    const { fadeOut, loadingP1, loadingP2, loadingVs, statusBar } = this.state
    const playerOneAnimation = !fadeOut ? 'fadeInLeft' : 'fadeOutLeft'
    const playerTwoAnimation = !fadeOut ? 'fadeInRight' : 'fadeOutRight'
    const vsAnimation = !fadeOut ? 'bounceInUp' : 'bounceOutDown'
    const logoAnimation = !fadeOut ? 'rotateIn' : 'rotateOut'
    const progressBarAnimation = fadeOut ? 'fadeOut' : 'bounceInUp'
    const loadingAnimationP1 = loadingP1 ? 'invisible' : 'animated fadeIn'
    const loadingAnimationP2 = loadingP2 ? 'invisible' : 'animated fadeIn'
    const loadingAnimationVs = loadingVs ? 'invisible' : 'animated fadeIn'

    if (dbz.loadFight) {
      return (
        <div>
          <div className="pre-fight-page-container">
            <div className={`character-hero-container player1 animated ${playerOneAnimation}`}>
              <img
                alt="player 1"
                onLoad={this.onImageLoad('p1')}
                src={dbz.player1.character.hero}
                className={loadingAnimationP1}
              />
              {loadingP1 && (
                <FaSpinner className="spin-menu-item"/>
              )}
              <div className="display-name-container red animated">
                <h1>{dbz.player1.character.name}</h1>
              </div>
            </div>
            <div className="logo-vs-container">
              <LogoAnimated animation={logoAnimation}/>
              <div className={`vs-container animated ${vsAnimation}`}>
                <img
                  alt="vs"
                  className={loadingAnimationVs}
                  onLoad={this.onImageLoad('vs')}
                  src={require('../../../img/vs.png')}
                />
                {loadingVs && (
                  <FaSpinner className="spin-menu-item"/>
                )}
              </div>
            </div>
            <div className={`character-hero-container player2 animated ${playerTwoAnimation}`}>
              <img
                alt="player 2"
                className={loadingAnimationP2}
                onLoad={this.onImageLoad('p2')}
                src={dbz.player2.character.hero}
              />
              {loadingP2 && (
                <FaSpinner className="spin-menu-item"/>
              )}
              <div className="display-name-container">
                <h1>{dbz.player2.character.name}</h1>
              </div>
            </div>
          </div>
          <div className={`progress-bar-container animated ${progressBarAnimation}`}>
            <Line percent={statusBar} strokeWidth="1" strokeColor="#4d4d4d" />
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