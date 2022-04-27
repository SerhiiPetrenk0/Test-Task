import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

import { PostForm } from '../components/other/PostForm';

import store from '../redux';

configure({ adapter: new Adapter() });

describe('PostForm component', () => {
  beforeEach(() => {
    const dummyDispatch = jest.fn();
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock.mockReturnValue(store);
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should match a snapshot (PostForm.test.tsx.snap)', () => {
    expect(toJson(mount(<PostForm />))).toMatchSnapshot();
  });
  
  it('should match a snapshot (PostForm.test.tsx.snap) after clikc button', () => {
    const component = shallow(<PostForm />);
    mount(<PostForm />).find('Button').find('button').simulate('click');
    expect(toJson(component)).toMatchSnapshot();
  });
});
