import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import About from '../About'

describe('<About />', () => {
  test('renders three <p> tags', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('p')).toHaveLength(3);
  });
})
