import { connect } from 'react-redux'
import QuestionHistory from '../components/question/QuestionHistory'

const mapStateToProps = (state) => ({
  questions: state.questions.list.filter(q => q.completed)
})

const VisibleHistory = connect(
  mapStateToProps
)(QuestionHistory)

export default VisibleHistory
