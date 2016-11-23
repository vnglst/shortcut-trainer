import { connect } from 'react-redux'
import Stats from '../components/stats/Stats'
import { tryAgain } from '../actions'

const mapStateToProps = (state) => ({
  total: state.questions.list.length,
  open: state.questions.list.filter(q => !q.completed).length,
  completed: state.questions.list.filter(q => q.completed).length,
  correct: state.questions.list.filter(q => q.a === q.userAnswer).length,
  mistakes: state.questions.list.filter(q => q.completed && q.a !== q.userAnswer).length
})

const mapDispatchToProps = ({
  tryAgain
})

const VisibleStats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)

export default VisibleStats
