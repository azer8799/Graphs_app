import React from 'react';
import Login from "./Login.js";
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const page = renderer.create(<Login />).toJSON();
    expect(page).toMatchSnapshot();
  });

// it('Function and state test care', () => {
//     const loginData = renderer.create(<Login />).getInstance();
//    expect(loginData.check(2)).toEqual(2)
//   });

  
