import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/auth.js');

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
