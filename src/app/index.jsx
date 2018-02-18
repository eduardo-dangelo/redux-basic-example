import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'
import StartPage from './scenes/StartPage'
import SelectPage from './scenes/SelectPage'
import PreFightPage from './scenes/PreFightPage'
import './style.scss'

class App extends React.Component {

  render() {
    return (
      <div>
        <StartPage/>
        <SelectPage/>
        <PreFightPage/>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(App)