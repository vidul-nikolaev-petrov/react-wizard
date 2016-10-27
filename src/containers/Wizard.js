import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as WizardActions from '../actions'
import WizardPage from '../components/WizardPage'

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(WizardActions, dispatch),
    uiPolicy: (form) => {
        const route = ownProps.children.props.route
        if (route.next) {
            if (form.valid) {
                dispatch(WizardActions.showNavNext())
            } else {
                dispatch(WizardActions.hideNavNext())
            }
            dispatch(WizardActions.setNavNext(route.next))
            dispatch(WizardActions.hideFormSubmit())
        } else {
            if (form.valid) {
                dispatch(WizardActions.showFormSubmit())
            } else {
                dispatch(WizardActions.hideFormSubmit())
            }
            dispatch(WizardActions.hideNavNext())
        }
        if (route.prev) {
            dispatch(WizardActions.setNavPrev(route.prev))
            dispatch(WizardActions.showNavPrev())
        } else {
            dispatch(WizardActions.hideNavPrev())
        }
    },
    uiPolicyNavNext: (form) => {
        const route = ownProps.children.props.route
        if (form.valid) {
            if (route.next) {
                dispatch(WizardActions.showNavNext())
            } else {
                dispatch(WizardActions.hideNavNext())
                dispatch(WizardActions.showFormSubmit())
            }
        } else {
            dispatch(WizardActions.hideNavNext())
            dispatch(WizardActions.hideFormSubmit())
        }
    }
})

export default connect(null, mapDispatchToProps)(WizardPage)