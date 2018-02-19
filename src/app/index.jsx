import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'
import StartPage from './scenes/StartPage'
import SelectPage from './scenes/SelectPage'
import PreFightPage from './scenes/PreFightPage'
import './style.scss'

class App extends React.Component {
  renderStartPage = () => {
    const { dbz } = this.props

    if (!dbz.start) {
      return <StartPage/>
    }

    return null
  }

  renderSelectPage = () => {
    const { dbz } = this.props

    if (dbz.start && !dbz.loadFight) {
      return <SelectPage/>
    }

    return null
  }

  renderPreFightPage = () => {
    const { dbz } = this.props

    if (dbz.finishSelection && dbz.loadFight) {
      return <PreFightPage/>
    }

    return null
  }

  render() {
    const { dbz } = this.props
    return (
      <div>
        {this.renderStartPage()}
        {this.renderSelectPage()}
        {this.renderPreFightPage()}
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
)(App)