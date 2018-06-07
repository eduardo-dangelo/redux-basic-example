import React from 'react'
import { Button } from 'react-bootstrap'

class ButtonAnimated extends React.Component {
  render() {
    const { onClick, content, animation, waiting } = this.props
    return (
      <Button className={`action-btn ${waiting && 'waiting-anim'} animated ${animation}`} onClick={onClick}>
        {content}
      </Button>
    )
  }
}

export default ButtonAnimated