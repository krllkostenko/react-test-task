import React from "react";
import store from '../../state-management';
import {configure, shallow, ShallowWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {spy} from 'sinon'

import Header from "../../components/presentations/Header";

configure({adapter: new Adapter});

describe('<Header />', () => {
    let wrapper:ShallowWrapper;
    const handler = spy();

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <Router>
                    <Header/>
                </Router>
            </Provider>);
    });

    it('should render SignUp and Login buttons if user is not logged in', () => {
        expect(wrapper.exists(<button>Sign Up</button>));
        expect(wrapper.exists(<button>Login</button>));
    });
 
    it('should render Logout button if user is logged out', () => {
        expect(wrapper.exists(<button>Logout</button>));
    });

    it('should call a function on button click', () => {
        const buttons = document.querySelector('button');
        for (let button in buttons) {
            wrapper.find(`${button}`).simulate('click');
            expect(handler.calledOnce).toBeTruthy();
        }
    });

});