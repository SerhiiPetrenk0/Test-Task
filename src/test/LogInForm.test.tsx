import React from 'react';
import { configure, mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import 'jsdom-global/register';
import * as reactRedux from 'react-redux';

import { LogInForm } from '../components/other/LogInForm';

import store from '../redux';

configure({ adapter: new Adapter() });

describe('LogInForm component', () => {
  let ShallowLogInForm: (arg0: boolean) => ShallowWrapper;
  let MountLogInForm: (arg0: boolean) => ReactWrapper<{show: boolean}>;

  beforeEach(() => {
    ShallowLogInForm = show => shallow(<LogInForm show={show} handleClose={()=>null}/>);
    MountLogInForm = show => mount(<LogInForm show={show} handleClose={()=>null}/>);
    const dummyDispatch = jest.fn();
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock.mockReturnValue(store);
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should match a snapshot (LogInForm.test.tsx.snap) false', () => {
    const component = ShallowLogInForm(false);
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should match a snapshot (LogInForm.test.tsx.snap) true', () => {
    const component = ShallowLogInForm(true);
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should have (show) prop', () => {
    const component = MountLogInForm(true);
    expect(component.props().show).toBe(true);
  });
});
