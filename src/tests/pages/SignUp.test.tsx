import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import sinon from 'sinon';

import SignUp from "../../pages/SignUp";
import store from "../../state-management";

configure({ adapter: new Adapter() });

describe("<SignUp/>", () => {
  let wrapper: any;
  const handleChangeSpy = sinon.spy();
  const signInHandlerSpy = sinon.spy();
  const signUpProps = {
    history: ""
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <SignUp {...signUpProps} />
        </Router>
      </Provider>
    );
  });

  it("should call handleChange() on input change", () => {
    const inputElements = document.querySelector('input');
    for(let input in inputElements){
      wrapper.find(input).simulate("change");
      expect(handleChangeSpy.calledOnce).toBeTruthy();
    }
  });
  
  it('should call signInHandler() on button click',()=>{
    const buttons = document.querySelector('button');
    for(let button in buttons){ 
      wrapper.find(button).simulate('click');
      expect(signInHandlerSpy.calledOnce).toBeTruthy();
    }
  });
});
