/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from './reducers/';
import store from './store';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <Provider store={store}>
    <App
      state={initialState}
      submitTodo={mockFunction}
    /></Provider>,
  );

  expect(component.exists()).toEqual(true);
});
