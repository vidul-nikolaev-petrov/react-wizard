import React from 'react'
import { connect } from 'react-redux'
import { Form, Errors, Field, actions } from 'react-redux-form'

export const FormModel = 'wizForms.page1'

class WizPage1 extends React.Component {
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
                            model=".firstName"
                            onBlur={onBlur}
                            updateOn="blur"
                            validators={{required: (val) => val && val.length > 2}}
                            validateOn="change">
                                <label>First name:</label>
                                <input type="text" placeholder="last name: minumum 3 chars" />
                                <Errors
                                    className="errors"
                                    model=".firstName"
                                    show="touched"
                                    messages={{required: 'Required: minumum 3 chars'}} />
                        </Field>
                    </div>

                    <div className="field">
                        <Field
                            model=".lastName"
                            onBlur={onBlur}
                            updateOn="blur"
                            validators={{required: (val) => val && val.length > 5}}
                            validateOn="change">
                                <label>Last name:</label>
                                <input type="text" placeholder="last name: minumum 6 chars" />
                                <Errors
                                    className="errors"
                                    model=".lastName"
                                    show="touched"
                                    messages={{required: 'Required: minumum 6 chars'}} />
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

export default connect(mapStateToProps)(WizPage1)