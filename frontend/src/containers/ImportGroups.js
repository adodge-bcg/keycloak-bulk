import { connect } from 'react-redux'
import * as creators from '../actions/creators'
import ImportGroups from '../components/ImportGroups';

const mapStateToProps = state => {
  return {
    text: state.importGroupsText,
    importGroups: state.ImportGroups,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: value => dispatch(creators.updateImportGroupsText(value)),
    onSubmit: importGroups => dispatch(creators.executeImportGroups(importGroups)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportGroups)
