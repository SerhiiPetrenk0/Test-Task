import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';

import { StarBar } from '../../components/other/StarBar';

configure({ adapter: new Adapter() });

describe('StarBar component', () => {
  it('Snapshot StarBar component count={"0"}', () => {
    const component = shallow(<StarBar count={"0"} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('Snapshot StarBar component count={"4"}', () => {
    const component = shallow(<StarBar count={"4"} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('check props', () => {
    const wrapper = mount(<StarBar count={"3"} />);
    expect(wrapper.props().count).toBe("3");
  });
  it("check stars", () => {
    const wrapper = mount(<StarBar count={"3"} />);
    expect(wrapper.find('BsStarFill')).toHaveLength(5);
  });
});

describe('Render color of stars', () => {
  it("(*0*)", () => {
    const wrapper = mount(<StarBar count={"0"} />).find('BsStarFill');
    const stars = wrapper.map((node) => node.prop('color'));
    expect(stars).toEqual(['#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9']);
  });
  it("(*1*)", () => {
    const wrapper = mount(<StarBar count={"1"} />).find('BsStarFill');
    const stars = wrapper.map((node) => node.prop('color'));
    expect(stars).toEqual(['#FFBA5A', '#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9']);
  });
  it("(*3*)", () => {
    const wrapper = mount(<StarBar count={"3"} />).find('BsStarFill');
    const stars = wrapper.map((node) => node.prop('color'));
    expect(stars).toEqual(['#FFBA5A', '#FFBA5A', '#FFBA5A', '#a9a9a9', '#a9a9a9']);
  });
  it("(*5*)", () => {
    const wrapper = mount(<StarBar count={"5"} />).find('BsStarFill');
    const stars = wrapper.map((node) => node.prop('color'));
    expect(stars).toEqual(['#FFBA5A', '#FFBA5A', '#FFBA5A', '#FFBA5A', '#FFBA5A']);
  });
});
