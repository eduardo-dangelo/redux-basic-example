import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import './style.scss'

class StartPage extends React.Component {
  state = {
    start: false,
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
            <div className="logo-container animated rotateIn">
              <img src={require('../../../img/logo.png')} alt="dragon ball"/>
            </div>
            <h1>Dragon Ball</h1>
            <h2 className=" animated bounce">Fight game menu</h2>
            <Button className="action-btn animated zoomIn" onClick={this.handleStartApplication()}>
              Start
            </Button>
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