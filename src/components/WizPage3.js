import React from 'react'
import { connect } from 'react-redux'
import { Form, Errors, Field, actions } from 'react-redux-form'

const FormModel = 'wizForms.page3'

class WizPage3 extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.uiPolicy(this.props.form))
        // this.props.dispatch(actions.reset(FormModel)) // on invalid ?
    }

    onBlur() {
        setTimeout(() => {
            this.props.dispatch(
                actions.submit(FormModel, Promise.resolve(true)))
            this.props.uiPolicyNavNext(this.props.form)
        })
    }

    render() {
        const onBlur = () => this.onBlur()
        return (
            <div className="form">
                <div className="form-title">
                    <span>{this.props.route.name}</span>
                </div>
                <Form model={FormModel}>
                    <div className="field">
                        <Field
                            model=".message"
                            onBlur={onBlur}
                            updateOn="blur"
                            validators={{required: (val) => val && val.length > 11}}
                            validateOn="blur">
                                <label>Message:</label>
                                <input type="text" placeholder="message: minumum 12 chars" />
                                <Errors
                                    className="errors"
                                    model=".message"
                                    show="touched"
                                    messages={{required: 'message: minumum 12 chars'}} />
                        </Field>
                    </div>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.wizForms.forms[FormModel.split('.')[1]].$form
    }
}

export default connect(mapStateToProps)(WizPage3)