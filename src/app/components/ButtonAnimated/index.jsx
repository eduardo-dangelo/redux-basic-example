import React from 'react'
import { Button } from 'react-bootstrap'

class ButtonAnimated extends React.Component {
  render() {
    const { onClick, content, animation } = this.props
    return (
      <Button
        onClick={onClick}
        className={`action-btn animated ${animation}`}
      >
        {content}
      </Button>
    )
  }
}

export default ButtonAnimated