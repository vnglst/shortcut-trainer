import React, { Component } from 'react'

// Higher Order Component
// Returns an empty "loader" div if empty,
// Returns unchanged WrappedComponent if not
const ShowQuestion = (WrappedComponent) => {
  return class ShowQuestion extends Component {
    render () {
      return (!this.props.currentQuestion)
        ? <h1>No more questions</h1>
        : <WrappedComponent {...this.props} />
    }
  }
}

export default ShowQuestion
