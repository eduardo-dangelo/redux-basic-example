import React from 'react'
import { actions } from './reducer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StartPage from './scenes/StartPage'
import SelectPage from './scenes/SelectPage'
import PreFightPage from './scenes/PreFightPage'
import './style.scss'

class App extends React.Component {
  renderAppScenes = () => {
    const { dbz } = this.props

    if (!dbz.start) {
      return <StartPage/>
    }

    if (dbz.start && !dbz.loadFight) {
      return <SelectPage/>
    }

    if (dbz.finishSelection && dbz.loadFight) {
      return <PreFightPage/>
    }
  }

  render() {
    return (
      <div className="app">
        {this.renderAppScenes()}
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