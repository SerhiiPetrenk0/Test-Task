import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';

import { StarBar } from '../components/other/StarBar';

configure({ adapter: new Adapter() });

describe('StarBar component', () => {
  let ShallowStarBar: (arg0: string) => any;
  let MountStarBar: (arg0: string) => any;

  beforeEach(() => {
    ShallowStarBar = item => shallow(<StarBar count={item} />);
    MountStarBar = item => mount(<StarBar count={item} />);
  });

  it('should match a snapshot (StarBar.test.tsx.snap) count={"0"}', () => {
    const component = ShallowStarBar('0');
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should match a snapshot (StarBar.test.tsx.snap) count={"4"}', () => {
    const component = ShallowStarBar('4');
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should have (count) prop', () => {
    const wrapper = MountStarBar('3');
    expect(wrapper.props().count).toBe('3');
  });
  
  it('should have five BsStarFill', () => {
    const wrapper = MountStarBar('3');
    expect(wrapper.find('BsStarFill')).toHaveLength(5);
  });
});

describe('Render color of stars', () => {
  let stars: (string | undefined)[];
  let MountStarBar: (arg0: string) => any;
  const mockStars = jest.fn()
    .mockReturnValue('0')
    .mockReturnValueOnce('0')
    .mockReturnValueOnce('1')
    .mockReturnValueOnce('3') 
    .mockReturnValueOnce('5');
  const mockStarsResult = jest.fn()
    .mockReturnValue(['#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9'])
    .mockReturnValueOnce(['#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9'])
    .mockReturnValueOnce(['#FFBA5A', '#a9a9a9', '#a9a9a9', '#a9a9a9', '#a9a9a9'])
    .mockReturnValueOnce(['#FFBA5A', '#FFBA5A', '#FFBA5A', '#a9a9a9', '#a9a9a9']) 
    .mockReturnValueOnce(['#FFBA5A', '#FFBA5A', '#FFBA5A', '#FFBA5A', '#FFBA5A']);

  beforeEach(() => {
    MountStarBar = item => mount(<StarBar count={item} />).find('BsStarFill');
    let wrapper = MountStarBar(mockStars());
    stars = wrapper.map((node: { prop: (arg0: string) => any; }) => node.prop('color'));
  });

  it('should render zero stars', () => {   
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should render one stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should render three stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should render five stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
});
