import React from 'react'
import { Button } from 'react-bootstrap'

class ButtonAnimated extends React.Component {
  render() {
    const { onClick, content, animation } = this.props
    return (
      <Button className={`action-btn animated ${animation}`} onClick={onClick}>
        {content}
      </Button>
    )
  }
}

export default ButtonAnimated