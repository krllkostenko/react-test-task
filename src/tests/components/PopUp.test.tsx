import React from "react";
import {configure, shallow, ShallowWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {spy} from 'sinon'

import PopUp from "../../components/presentations/PopUp";

configure({adapter: new Adapter});

const popUpProps = {};
const handlerFunction = spy()

describe('<PopUp/>', () => {
    let wrapper:ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<PopUp {...popUpProps}/>);
    });
    it('returns function on button click', () => {
        const handlers = document.querySelector('[data-popup-handler]');
        for (let handler in handlers) {
            wrapper.find(`${handler}`).simulate('click');
            expect(handlerFunction.calledOnce).toBeTruthy();
        }
    });
});