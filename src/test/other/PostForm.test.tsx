import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { PostForm } from "../../components/other/PostForm";
import toJson from "enzyme-to-json";
import store from '../../redux';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

configure({ adapter: new Adapter() })

describe('PostForm component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
      const dummyDispatch = jest.fn()
    useSelectorMock.mockReturnValue({store})
    useDispatchMock.mockReturnValue(dummyDispatch) 

    it('Snapshot PostForm component', () => {
      expect(toJson(mount(<PostForm />))).toMatchSnapshot();
    }) 


    it('Clikc Button PostForm', () => {
      const component = shallow(<PostForm />)
      mount(<PostForm />).find('Button').find('button').simulate('click')
      expect(toJson(component)).toMatchSnapshot();
    })
  })
