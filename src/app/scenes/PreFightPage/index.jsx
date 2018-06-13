import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import LogoAnimated from '../../components/LogoAnimated'
import './style.scss'
import FaSpinner from 'react-icons/lib/fa/spinner'
import { Line } from 'rc-progress'

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
    const { fadeOut, loadingP1, loadingP2, loadingVs } = this.state

    if (dbz.loadFight) {
      return (
        <div>
          <div className="pre-fight-page-container">
            <div className={`character-hero-container player1 animated ${!fadeOut ? 'fadeInLeft' : 'fadeOutLeft'}`}>
              <img
                src={dbz.player1.character.hero}
                alt="player 1"
                onLoad={this.onImageLoad('p1')}
                className={loadingP1 ? 'invisible' : 'animated fadeIn'}
              />
              {loadingP1 && <FaSpinner className="spin-menu-item"/>}
              <div className={`display-name-container red animated`}>
                <h1>{dbz.player1.character.name}</h1>
              </div>
            </div>
            <div className="logo-vs-container">
              <LogoAnimated animation={!fadeOut ? 'rotateIn' : 'rotateOut'}/>
              <div className={`vs-container animated ${!fadeOut ? 'bounceInUp' : 'bounceOutDown'}`}>
                <img
                  src={require('../../../img/vs.png')}
                  alt="vs"
                  onLoad={this.onImageLoad('vs')}
                  className={loadingVs ? 'invisible' : 'animated fadeIn'}
                />
                {loadingVs && <FaSpinner className="spin-menu-item"/>}
              </div>
            </div>
            <div className={`character-hero-container player2 animated ${!fadeOut ? 'fadeInRight' : 'fadeOutRight'}`}>
              <img
                src={dbz.player2.character.hero}
                alt="player 2"
                onLoad={this.onImageLoad('p2')}
                className={loadingP2 ? 'invisible' : 'animated fadeIn'}
              />
              {loadingP2 && <FaSpinner className="spin-menu-item"/>}
              <div className={`display-name-container blue animated`}>
                <h1>{dbz.player2.character.name}</h1>
              </div>
            </div>
          </div>
          <div className={`progress-bar-container animated ${fadeOut ? 'fadeOut' : 'bounceInUp'}`}>
            <Line percent={this.state.statusBar} strokeWidth="1" strokeColor="#4d4d4d" />
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