import { connect } from 'react-redux'
import Stats from '../components/stats/Stats'

const mapStateToProps = (state) => ({
  total: state.questions.list.length,
  open: state.questions.list.filter(q => !q.completed).length,
  completed: state.questions.list.filter(q => q.completed).length,
  correct: state.questions.list.filter(q => q.a === q.userAnswer).length,
  mistakes: state.questions.list.filter(q => q.a !== q.userAnswer).length
})

const VisibleStats = connect(
  mapStateToProps
)(Stats)

export default VisibleStats
