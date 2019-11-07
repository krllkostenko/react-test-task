import React from "react";
import {configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import ErrorMessagePopUp from "../../components/containers/ErrorMessagePopUp";
import ErrorMessage from "../../components/presentations/ErrorMessage";

configure({adapter: new Adapter});

const errorMessageProps = {
    errorMessage: ()=>'',
};

describe('<ErrorMessagePopUp/>', () => {
    let wrapper:ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<ErrorMessagePopUp/>);
    });

    it('should render ErrorMessagePopUp if inputs are invalid', () => {
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
        expect(wrapper.contains(<ErrorMessage {...errorMessageProps}/>));
    });
    
    it('should render a result of function in <ErrorMessage/> component',()=>{
        expect(wrapper.find(ErrorMessage).contains(<div>{errorMessageProps.errorMessage()}</div>));
    });
});
