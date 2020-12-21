import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe.skip('Counter component', () => {
  it('should counter value be 0, when no prop "start"', () => {
    const wrapper = shallow(<Counter />);
    const counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('0');
  });
  it('should counter value be as prop "start", when there is prop "start"', () => {
    const wrapper = shallow(<Counter start={50} />);
    const counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('50');
  });
  it('should have buttons to add and subtract', () => {
    const wrapper = shallow(<Counter />);
    const addButton = wrapper.find('.add');
    const subtractButton = wrapper.find('.subtract');
    expect(addButton.exists() && subtractButton.exists()).toBeTruthy();
  });
  it('should add 1 after clicked "add" button', () => {
    const wrapper = shallow(<Counter />);
    const addButton = wrapper.find('.add');
    addButton.simulate('click');
    const counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('1');
  });
  it('should subtract 1 after clicked "subtract" button', () => {
    const wrapper = shallow(<Counter />);
    const subtractButton = wrapper.find('.subtract');
    subtractButton.simulate('click');
    const counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('-1');
  });
  it('should change counter value after typing input and click "change counter"', () => {
    const wrapper = shallow(<Counter />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '200' } });
    const changeButton = wrapper.find('.change');
    changeButton.simulate('click');
    const counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('200');
  });
  it('should reset counter value to "start" value, with start props defined', () => {
    const startValue = 50;
    const wrapper = shallow(<Counter start={startValue} />);

    let counterValue = wrapper.find('span');
    counterValue = counterValue + 10;

    const resetButton = wrapper.find('.reset');
    resetButton.simulate('click');

    counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe(String(startValue));
  });
  it('should reset counter value to "start" value, without start props defined', () => {
    const wrapper = shallow(<Counter />);

    let counterValue = wrapper.find('span');
    const addButton = wrapper.find('.add');
    addButton.simulate('click');
    const resetButton = wrapper.find('.reset');
    resetButton.simulate('click');
    counterValue = wrapper.find('span');
    expect(counterValue.text()).toBe('0');
  });
});
