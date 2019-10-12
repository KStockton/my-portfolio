import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';


const mockIsChecked = jest.fn();

describe('Nav', () => {
  let wrapper, mockEvent;

  beforeEach(() => {
    mockEvent = { target: { checked: true }};
    wrapper = shallow(<Nav
      handleChange={ mockIsChecked }
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match the snapshot if isChecked is true', () => {
    wrapper.setState({ isChecked: true });
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should have a default state', () => {
    expect(wrapper.state().isChecked).toBe(false);
  });

  it('should update isChecked when called', () => {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().isChecked).toBe(true);
  });

  it('should call handleChange when checkbox is selected', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    
    wrapper.find('#menu').simulate('change', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

});