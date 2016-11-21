import { connect } from 'react-redux'
import QuestionCard from '../components/QuestionCard'

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.list.filter(q => q.id === state.questions.current)[0],
  userAnswer: state.input.join(` + `)
})

const VisibleTodoList = connect(
  mapStateToProps
)(QuestionCard)

export default VisibleTodoList
