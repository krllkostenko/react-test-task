import React, { Component } from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

import PrivateRouter from "../../routes/PrivateRoute";

configure({ adapter: new Adapter() });

describe("<PrivateRoute/>", () => {
  let wrapper: ShallowWrapper;

  const privateRouterProps = {
    path: "/",
    component: Component,
    redirect: ""
  };

  beforeEach(() => {
    wrapper = shallow(
      <Router>
        //@ts-ignore
        <PrivateRouter {...privateRouterProps} />
      </Router>
    );
  });

  it("renders <Login/> component if user is not logged in", () => {
    expect(wrapper).toHaveLength(1);
  });
});
