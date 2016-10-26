import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FormButtons from '../components/FormButtons'
import * as WizardActions from '../actions'

const mapStateToProps = state => ({
    showCancel: state.visibilityFormCancel,
    showSubmit: state.visibilityFormSubmit
})

const mapDispatchToProps = dispatch => ({
    resetStore: bindActionCreators(WizardActions.resetStore, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FormButtons)