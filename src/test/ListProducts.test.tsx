import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import * as reactRedux from 'react-redux'
import 'jsdom-global/register';

import { ListProducts } from '../components/ListProducts';

configure({ adapter: new Adapter() });
const initialStore = [
    {
    in_potential_products: false,
    asin: "B0721KZHWT",
    price: 15.79,
    weight: 0.61949822,
    updated_at: 1537974537000.0,
    name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge - Handy Week Calendar\/Organiser by Plan Smart - Bonus: 3 Quality Dry Erase Markers with Eraser Included",
    shipping_weight: null,
    domain: "uk",
    votes_count: 51,
    daily_cashflow: 521.07,
    currency: "GBP",
    img: "https://m.media-amazon.com/images/I/71FG+7OuuKL._AC_SX466_.jpg",
    daily_sales: 33,
    stars: 4.6,
    bsr_value: 2360,
    brand_class: null,
    size: [
        0.0393701,
        11.417329,
        16.535442
    ],
    link: "https:\/\/www.amazon.co.uk\/Magnetic-Weekly-Planner-Whiteboard-Fridge\/dp\/B0721KZHWT\/ref=sr_1_17?ie=UTF8&qid=1537981729&sr=8-17&keywords=fridge+organisers",
    bsr_category: "Home & Kitchen",
    brand: "Plan Smart"
},
{
    in_potential_products: false,
    asin: "B0721KFGWT",
    price: 15.79,
    weight: 0.61949822,
    updated_at: 1537974537000.0,
    name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge - Handy Week Calendar\/Organiser by Plan Smart - Bonus: 3 Quality Dry Erase Markers with Eraser Included",
    shipping_weight: null,
    domain: "uk",
    votes_count: 51,
    daily_cashflow: 521.07,
    currency: "GBP",
    img: "https://m.media-amazon.com/images/I/71FG+7OuuKL._AC_SX466_.jpg",
    daily_sales: 33,
    stars: 4.6,
    bsr_value: 2360,
    brand_class: null,
    size: [
        0.0393701,
        11.417329,
        16.535442
    ],
    link: "https:\/\/www.amazon.co.uk\/Magnetic-Weekly-Planner-Whiteboard-Fridge\/dp\/B0721KZHWT\/ref=sr_1_17?ie=UTF8&qid=1537981729&sr=8-17&keywords=fridge+organisers",
    bsr_category: "Home & Kitchen",
    brand: "Plan Smart"
},
];

describe('ListProducts component', () => {
  const myInitialState = initialStore;
  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const dummyDispatch = jest.fn();

  beforeEach(() => {
      useSelectorMock.mockClear();
      useDispatchMock.mockClear();
    });

  useSelectorMock.mockReturnValue(initialStore);
  useDispatchMock.mockReturnValue(dummyDispatch);

  it('Snapshot ListProducts component', () => {
    const wrapper = shallow(<ListProducts />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
