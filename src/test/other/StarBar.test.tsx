
import React from "react";
import { StarBar } from '../../components/other/StarBar';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

it("should render StarBar component", () => {
    const component = shallow(<StarBar count={"3"} />);
    expect(component).toMatchSnapshot();
})

it('renders correctly', () => {
    const tree = renderer
      .create(<StarBar count={"3"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });