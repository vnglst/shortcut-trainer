import { connect } from 'react-redux'
import Question from '../components/question/Question'
import { addKey, removeKey, answerQuestion } from '../actions'

const mapStateToProps = (state) => {
  const openQuestions = state.questions.list.filter(q => !q.completed)
  return {
    currentQuestion: openQuestions[0],
    userAnswer: state.input.join(` + `)
  }
}

const mapDispatchToProps = ({
  addKey,
  removeKey,
  answerQuestion
})

const VisibleInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default VisibleInput
