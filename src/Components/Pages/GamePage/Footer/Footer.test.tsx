import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

it('Component Footer should render without crashing', () => {
  expect(shallow(<Footer />).exists()).toBeTruthy()
})
