import { connect } from 'react-redux'
import QuestionCard from '../components/QuestionCard'

const mapStateToProps = (state) => {
  const openQuestions = state.questions.list.filter(q => !q.completed)
  return {
    currentQuestion: openQuestions[0],
    userAnswer: state.input.join(` + `)
  }
}

const VisibleInput = connect(
  mapStateToProps
)(QuestionCard)

export default VisibleInput
