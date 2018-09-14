import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../app.jsx';

describe('MyComponent', () => {
  beforeEach(()=>{
    window.history.pushState({}, 'Test Title', '/test.html?query=true');
    console.log('hisss', window);
  }) 
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug />);
  
    expect(component).toMatchSnapshot();
  });
});