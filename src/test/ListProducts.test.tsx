import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

import { ListProducts } from '../components/ListProducts';

import { MockProductList } from './MockData';

configure({ adapter: new Adapter() });

describe('ListProducts component', () => {
  beforeEach(() => {
    const dummyDispatch = jest.fn();
    const myInitialState = MockProductList;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMock.mockReturnValue(MockProductList);
    useDispatchMock.mockReturnValue(dummyDispatch);
  });

  it('should match a snapshot (ListProducts.test.tsx.snap)', () => {
    const wrapper = shallow(<ListProducts />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
