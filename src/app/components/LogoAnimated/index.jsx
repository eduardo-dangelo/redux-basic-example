import React from 'react'

class LogoAnimated extends React.Component {
  state = {
    logo: false,
  }

  handleClickLogo = () => () => {
    this.setState({
      logo: true,
    })

    setTimeout(() => (
      this.setState({
        logo: false,
      })
    ), 1000)
  }

  render() {
    const { animation } = this.props
    const { logo } = this.state
    return (
      <div className={`animated ${animation}`}>
        <div
          onClick={this.handleClickLogo()}
          className={`logo-container animated ${logo && 'tada'}`}
        >
          <img src={require('../../../img/logo.png')} alt="dragon ball"/>
        </div>
      </div>
    )
  }
}

export default LogoAnimated