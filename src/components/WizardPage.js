import React, { PropTypes } from 'react'
import FormButtons from '../containers/visibleFormButtons'
import NavButtons from '../containers/visibleNavButtons'

const WizardPage = props => {
    const children = React.Children.map(props.children,
        child => React.cloneElement(child, {
            actions: props.actions,
            uiPolicy: props.uiPolicy,
            uiPolicyNavNext: props.uiPolicyNavNext
        })
    )

    return (
        <div className='container center'>
            <div id="nav">
                <NavButtons />
            </div>
            <div id="form">
                {children}
            </div>
            <div>
                <FormButtons />
            </div>
        </div>
    )
}

WizardPage.propTypes = {
    actions: PropTypes.object.isRequired,
    uiPolicy: PropTypes.func.isRequired,
    uiPolicyNavNext: PropTypes.func.isRequired
}

export default WizardPage