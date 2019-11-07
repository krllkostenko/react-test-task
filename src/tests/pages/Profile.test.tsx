import React from "react";
import { configure, mount, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Profile from "../../pages/Profile/index";
import { PopUp } from "../../components";

configure({ adapter: new Adapter() });

describe("<Profile/>", () => {
  let wrapper: any;
  const userDataTemplate = {
    email: "email",
    name: "name",
    password: "password"
  };

  beforeEach(() => {
    wrapper = mount(<Profile />);
  });

  it("userData should be equlal to {email,name,password}", () => {
    expect(wrapper.find(PopUp));
    expect(wrapper.setState({userData:userDataTemplate}));
    expect(wrapper.state("userData")).toEqual(userDataTemplate);
  });
});
