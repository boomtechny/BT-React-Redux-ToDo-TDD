/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import {App }from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from './reducers/';

Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
  
    <App
      state={initialState}
      submitTodo={mockFunction}
    />,
  );

  expect(component.exists()).toEqual(true);
});
