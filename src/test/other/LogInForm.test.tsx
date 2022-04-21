import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LogInForm } from "../../components/other/LogInForm";
import toJson from "enzyme-to-json";
import store from '../../redux';
import * as reactRedux from 'react-redux'

configure({ adapter: new Adapter() })

describe('LogInForm component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
      const dummyDispatch = jest.fn()
    useSelectorMock.mockReturnValue({store})
    useDispatchMock.mockReturnValue(dummyDispatch) 
    it('Snapshot LogInForm component', () => {
      const component = shallow(<LogInForm show={false} handleClose={()=>null}/>)
      expect(toJson(component)).toMatchSnapshot();
    }) 
  })
