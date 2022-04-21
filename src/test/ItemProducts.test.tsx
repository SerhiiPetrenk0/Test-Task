import React from "react";
import { configure, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ItemProducts } from "../components/ItemProducts";
import toJson from "enzyme-to-json";
import store from '../redux';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

configure({ adapter: new Adapter() })

describe('ItemProducts component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    const dummyDispatch = jest.fn()
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
    useSelectorMock.mockReturnValue(store)
    useDispatchMock.mockReturnValue(dummyDispatch)

    it('Snapshot ItemProducts component Loader', () => {
      expect(toJson(mount(<ItemProducts />))).toMatchSnapshot();
    }) 
    
    it('Snapshot ItemProducts component Content', () => {
        const component = mount(<ItemProducts />)
        component.find('Row')
        expect(toJson(component)).toMatchSnapshot();
      }) 

  })
