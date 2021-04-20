import { connect } from 'react-redux'
import * as creators from '../actions/creators'
import ExportGroups from '../components/ExportGroups';

const mapStateToProps = state => {
  return {
    groups: state.groups,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(creators.loadGroups()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportGroups)
