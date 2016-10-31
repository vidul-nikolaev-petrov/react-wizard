import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Buttons.css'

class FormButtons extends React.Component {
    static contextTypes() {
        return {
            router: PropTypes.object.isRequired
        };
    }

    constructor(props) {
        super(props)
        this.cancelWizard = this.cancelWizard.bind(this)
    }

    cancelWizard() {
        this.props.resetStore()
        setTimeout(() => {
            this.context.router.push('/')
            this.context.router.push('/wizard/1')
        })
    }

    render() {
        const showSubmit = this.props.showSubmit
          ?  (
                <Link to="/wizard/results">
                    <button className="Button">Submit</button>
                </Link>
              )
          : null

        const showCancel = (
            <button className="Button" onClick={this.cancelWizard}>
                Cancel
            </button>
        )

        return (
            <span>
                {showCancel}
                {showSubmit}
            </span>
        )
    }
}

FormButtons.propTypes = {
    resetStore: PropTypes.func.isRequired,
    showCancel: PropTypes.bool.isRequired,
    showSubmit: PropTypes.bool.isRequired,
}

export default FormButtons