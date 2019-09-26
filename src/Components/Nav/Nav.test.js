import React from 'react';
import Nav from './Nav';
import  { shallow } from 'enzyme';


const mockIsChecked = jest.fn();

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav
      handleChange={ mockIsChecked }
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().isChecked).toBe(false);
  });

  it('should match the snapshot if isChecked is true', () => {
    wrapper.setState({ isChecked: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should update isSelected when called', () => {
    const event = { target: { checked: true }};

    wrapper.instance().handleChange(event);
    expect(wrapper.state().isChecked).toBe(true);
  });

});