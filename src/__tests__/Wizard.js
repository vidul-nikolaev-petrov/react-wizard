import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import Wizard from '../containers/Wizard'
import store from '../helpers/tests'
import wizForms from '../reducers/wizForms'

describe('<Wizard>', () => {
    const props = {store: store}
    const state = store.getState()
    const wrapper = shallow(
        <Wizard {...props} />
    )

    it('should contain the "wizForms" reducer', () => {
        var page1 = Object.keys(state.wizForms.page1).sort(),
          page2 = Object.keys(state.wizForms.page2).sort(),
          page3 = Object.keys(state.wizForms.page3).sort()
        expect(typeof state.wizForms).to.equal('object')
        expect(page1[0]).to.equal('firstName')
        expect(page1[1]).to.equal('lastName')
    })

    it('check the "wizForms" reducer forms\' fields' , () => {
        var page1 = Object.keys(state.wizForms.page1).sort(),
          page2 = Object.keys(state.wizForms.page2).sort(),
          page3 = Object.keys(state.wizForms.page3).sort()
        expect(page1[0]).to.equal('firstName')
        expect(page1[1]).to.equal('lastName')
        expect(page2[0]).to.equal('email')
        expect(page3[0]).to.equal('message')
    });

    it('check the forms\' buttons\' reducer initial state' , () => {
        expect(state.visibilityFormCancel).to.equal(true)
        expect(state.visibilityFormSubmit).to.equal(false)
    })

    it('check the navigation buttons\' reducer initial state' , () => {
        expect(state.visibilityNavNext).to.equal(false)
        expect(state.visibilityNavPrev).to.equal(false)
    })

    it('check the navigation links initial state' , () => {
        expect(state.navLinks.next).to.equal(undefined)
        expect(state.navLinks.prev).to.equal(undefined)
    })

    it('check "Wizard" actions\' functionality', () => {
        var actions = wrapper.props().actions,
          getState = store.getState,
          next = '/wizard/3',
          prev = '/wizard/1'
        actions.hideFormCancel() && expect(getState().visibilityFormCancel).to.equal(false)
        actions.showFormCancel() && expect(getState().visibilityFormCancel).to.equal(true)
        actions.hideFormSubmit() && expect(getState().visibilityFormSubmit).to.equal(false)
        actions.showFormSubmit() && expect(getState().visibilityFormSubmit).to.equal(true)
        actions.hideNavNext() && expect(getState().visibilityNavNext).to.equal(false)
        actions.showNavNext() && expect(getState().visibilityNavNext).to.equal(true)
        actions.hideNavPrev() && expect(getState().visibilityNavPrev).to.equal(false)
        actions.showNavPrev() && expect(getState().visibilityNavPrev).to.equal(true)
        actions.setNavNext(next) && expect(getState().navLinks.next).to.equal(next)
        actions.setNavPrev(prev) && expect(getState().navLinks.prev).to.equal(prev)
    })    
});
