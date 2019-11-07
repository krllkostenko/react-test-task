import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../state-management";
import { spy } from "sinon";

import Login from "../../pages/Login/index";

configure({ adapter: new Adapter() });

describe("<Login/>", () => {
  let wrapper: any;
  const handleChangeSpy = spy();
  interface loginPropsInt {
    isLoggedIn: boolean;
    history: any;
  }
  const loginProps: loginPropsInt = {
    isLoggedIn: store.getState().auth.isLoggedIn,
    history: ""
  };
  const logInHandlerSpy = spy();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Login {...loginProps} />
      </Provider>
    );
  });

  it("should be rendered if user is not logged in", () => {
    expect(wrapper.props().children.props.isLoggedIn).toEqual(false);
    expect(wrapper).toHaveLength(1);
  });

  it("should call handleChange() on input change", () => {
    const inputElements = document.querySelector("input");
    for (let input in inputElements) {
      wrapper.find(input).simulate("change");
      expect(handleChangeSpy.calledOnce).toBeTruthy();
    }
  });

  it("should call loginHandler() on 'Sign Up' button click", () => {
    const buttons = document.querySelector("button");
    for(let button in buttons){ 
      wrapper.find(button).simulate("click");
      expect(logInHandlerSpy.calledOnce).toBeTruthy();
    }
  });
});
