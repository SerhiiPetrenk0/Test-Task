import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

import { ItemProducts } from '../components/ItemProducts';

import { MockProductItem } from './MockData';

configure({ adapter: new Adapter() });

describe('ItemProducts component', () => {
  beforeEach(() => {
    const dummyDispatch = jest.fn();
    const myInitialState = MockProductItem;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMock.mockReturnValue(MockProductItem);
    useDispatchMock.mockReturnValue(dummyDispatch);
  });

  it('should match a snapshot (ItemProducts.test.tsx.snap)', () => {
    const component = shallow(<ItemProducts />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
