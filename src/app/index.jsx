import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './reducer'
import StartPage from './scenes/StartPage'
import SelectPage from './scenes/SelectPage'
import './style.scss'

class App extends React.Component {


  render() {
    const { dbz } = this.props
    return (
      <div>
        <StartPage/>
        <SelectPage/>
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