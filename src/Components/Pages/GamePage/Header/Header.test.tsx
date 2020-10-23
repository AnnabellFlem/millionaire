import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

const MOCK_HANDLE_FUNC = jest.fn()

describe('<Header /> test', () => {
  const wrapper = mount(<Header handleBtnClick={MOCK_HANDLE_FUNC} />)

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Component should render header', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })
})
