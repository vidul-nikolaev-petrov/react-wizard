import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Wizard from '../containers/Wizard'
import WizPage1 from '../components/WizPage1'
import { FormModel } from '../components/WizPage1'
import store from '../helpers/tests'

describe('<WizPage1>', () => {
    const getState = store.getState
    var props = {store: store, 
        children: {props: {route: {next: '/wizard/1'}}}}
    var wrapper = shallow(<Wizard {...props} />)
    props = {...props,
        actions: wrapper.props().actions,
        uiPolicy: wrapper.props().uiPolicy,
        uiPolicyNavNext: wrapper.props().uiPolicyNavNext
    }
    wrapper = shallow(<WizPage1 {...props} />)
    wrapper.ownProps = {children: {props: {route: props.route}}}
                
    it('should contain the HTML form props', () => {
        expect(typeof wrapper.props().form).to.equal('object')
    })

    it('check the HTML form properties', () => {
        var form = wrapper.props().form
        expect(form.pristine).to.equal(true)
        expect(form.validated).to.equal(false)
        expect(form.model).to.equal(FormModel)
    });

    it('check the UI policy for form\'s buttons on change', () => {
        expect(getState().visibilityNavNext).to.equal(false)
        expect(getState().navLinks.next).to.equal(undefined)
        wrapper.props().uiPolicy({valid: true})
        expect(getState().visibilityNavNext).to.equal(true)
        expect(getState().navLinks.next).to.equal(props.children.props.route.next)
        expect(getState().visibilityFormSubmit).to.equal(false)
        wrapper.props().uiPolicy({valid: false})
        expect(getState().visibilityNavNext).to.equal(false)
    })

    it('check the UI policy for navigation\'s buttons on change', () => {
        wrapper.props().actions.hideNavNext()
        wrapper.props().uiPolicyNavNext({valid: true})
        expect(getState().visibilityNavNext).to.equal(true)
        expect(getState().visibilityFormSubmit).to.equal(false)
        wrapper.props().uiPolicyNavNext({valid: false})
        expect(getState().visibilityNavNext).to.equal(false)
        expect(getState().visibilityFormSubmit).to.equal(false)
    })
});
