import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import LogoAnimated from '../../components/LogoAnimated'
import ButtonAnimated from '../../components/ButtonAnimated'
import './style.scss'

class StartPage extends React.Component {
  state = {
    start: false,
    logo: false,
  }

  handleStartApplication = () => () => {
    const { actions } = this.props

    this.setState({
      start: true,
    })

    setTimeout(() => (
      actions.start()
    ), 1000)
  }

  renderStartPage = () => {
    const { dbz } = this.props
    const { start } = this.state

    if (!dbz.start) {
      return (
        <div className="start-page">
          <div className={`start-page-container animated ${!start ? 'bounceInUp' : 'bounceOutDown' }`}>
            <LogoAnimated animation="rotateIn"/>
            {/*<h1>Dragon Ball</h1>*/}
            <div className="animated bounceUp dbz-logo-container">
              <img src={require('../../../img/logo_dragon_ball.svg')} alt="Dragon Ball"/>
            </div>
            <h2 className="title animated bounce">A Fight Game Menu</h2>
            <ButtonAnimated
              animation={!start ? 'zoomIn' : 'zoomOut'}
              onClick={this.handleStartApplication()}
              content={'Start'}
            />
          </div>
        </div>
      )
    }

    return null
  }

  render() {
    return this.renderStartPage()
  }
}

export default connect(
  (state) => ({
    dbz: state.dbz,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(StartPage)