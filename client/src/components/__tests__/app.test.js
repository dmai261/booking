import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../app.jsx';

describe('MyComponent', () => {
  // beforeEach(()=>{
  //   window.location.assign = "localhost:3004/public/102"
  // }) 

  it('should render correctly in "debug" mode', () => {
    window.location.href = jest.fn();
    const component = shallow(<MyComponent debug />);
    
    expect(component).toMatchSnapshot();
  });
});