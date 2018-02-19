import React from 'react'

class LogoAnimated extends React.Component {
  state = {
    logo: false,
  }

  handleClickLogo = () => () => {
    this.setState(prevState => ({
      logo: !prevState.logo,
    }))
  }

  render() {
    const { animation } = this.props
    const { logo } = this.state
    return (
      <div className={`animated ${animation}`}>
        <div onClick={this.handleClickLogo()} className={`logo-container animated ${logo ? 'tada' : 'jello'}`}>
          <img src={require('../../../img/logo.png')} alt="dragon ball"/>
        </div>
      </div>
    )
  }
}

export default LogoAnimated