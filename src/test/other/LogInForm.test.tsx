import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LogInForm } from "../../components/other/LogInForm";
import toJson from "enzyme-to-json";
import 'jsdom-global/register';
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

    it('Snapshot LogInForm component false', () => {
      const component = mount(<LogInForm show={false} handleClose={()=>null}/>)
      expect(toJson(component)).toMatchSnapshot();
    }) 
    it('Snapshot LogInForm component true', () => {
      const component = mount(<LogInForm show={true} handleClose={()=>null}/>)
      expect(toJson(component)).toMatchSnapshot();
    })
    it('props', () => {
      const component = mount(<LogInForm show={true} handleClose={()=>null}/>)
      expect(component.props().show).toBe(true)
    })

  })
