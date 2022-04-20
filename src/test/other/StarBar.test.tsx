import React from "react";
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { StarBar } from '../../components/other/StarBar';

configure({ adapter: new Adapter() })

describe('StarBar component', () => {
  it('Snapshot StarBar component with props', () => {
    const tree = renderer
      .create(<StarBar count={"3"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});