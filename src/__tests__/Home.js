import React from 'react'
import { Link } from 'react-router'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Home from '../components/Home.js'

describe('<Home>', function () {
    it('should contain a link to the starting wiz page', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.contains(<Link to="/wizard/1">here</Link>)).to.equal(true)
    });
});
