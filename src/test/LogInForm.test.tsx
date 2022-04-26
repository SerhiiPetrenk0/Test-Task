import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import 'jsdom-global/register';
import * as reactRedux from 'react-redux';

import { LogInForm } from '../components/other/LogInForm';

import store from '../redux';

configure({ adapter: new Adapter() });

describe('LogInForm component', () => {
  const ShallowLogInForm = (show: boolean) => shallow(<LogInForm show={show} handleClose={()=>null}/>);
  const MountLogInForm = (show: boolean) => mount(<LogInForm show={show} handleClose={()=>null}/>);
  beforeEach(() => {
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
  
  it('should match to props', () => {
    const component = MountLogInForm(true);
    expect(component.props().show).toBe(true);
  });
});
