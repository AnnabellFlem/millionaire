import React from 'react'
import { mount } from 'enzyme'
import MainLayout from './MainLayout'

describe('<MainLayout /> test', () => {
  const wrapper = mount(<MainLayout />)

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
