import React, { Component } from 'react'

// Higher Order Component
// Returns an empty "loader" div if empty,
// Return unchanged WrappedComponent if not empty
const ShowQuestion = (WrappedComponent) => {
  return class ShowQuestion extends Component {
    render () {
      return (!this.props.currentQuestion)
        ? <div className='No-Questions'>No more questions</div>
        : <WrappedComponent {...this.props} />
    }
  }
}

export default ShowQuestion
