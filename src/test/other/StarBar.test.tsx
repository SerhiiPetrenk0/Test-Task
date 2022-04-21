import React from "react";
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { StarBar } from '../../components/other/StarBar';

configure({ adapter: new Adapter() })

describe('StarBar component', () => {
  it('Snapshot StarBar component count={"0"}', () => {
    const component = shallow(<StarBar count={"0"} />)
    expect(toJson(component)).toMatchSnapshot();
  })
  it('Snapshot StarBar component count={"4"}', () => {
    const component = shallow(<StarBar count={"4"} />)
    expect(toJson(component)).toMatchSnapshot();
  })
});