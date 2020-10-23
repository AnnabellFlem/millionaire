import React from 'react'
import { mount, shallow } from 'enzyme'
import ResultPage from './index'

describe('ResultPage test', function () {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<ResultPage />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render component', () => {
    expect(wrapper.find('main')).toBeDefined()
    expect(wrapper.find('main')).toHaveLength(1)
  })

  it('Should have an svg', () => {
    wrapper = mount(<ResultPage />)
    expect(wrapper.find('svg')).toHaveLength(1)
  })
})
