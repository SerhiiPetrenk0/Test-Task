import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';

import { StarBar } from '../components/other/StarBar';

configure({ adapter: new Adapter() });

describe('StarBar component', () => {
    const ShallowStarBar = (item: string) => shallow(<StarBar count={item} />);
    const MountStarBar = (item: string) => mount(<StarBar count={item} />);

  it('should match a snapshot (StarBar.test.tsx.snap) count={"0"}', () => {
    const component = ShallowStarBar('0');
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should match a snapshot (StarBar.test.tsx.snap) count={"4"}', () => {
    const component = ShallowStarBar('4');
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('should match to props', () => {
    const wrapper = MountStarBar('3');
    expect(wrapper.props().count).toBe('3');
  });
  
  it('should match to stars', () => {
    const wrapper = MountStarBar('3');
    expect(wrapper.find('BsStarFill')).toHaveLength(5);
  });
});

describe('Render color of stars', () => {
  let stars: (string | undefined)[];
  const MountStarBar = (item: string) => mount(<StarBar count={item} />).find('BsStarFill');
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
    let wrapper = MountStarBar(mockStars());
    stars = wrapper.map((node) => node.prop('color'));
  });

  it('should match to zero stars', () => {   
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should match to one stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should match to three stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
  
  it('should match to five stars', () => {
    expect(stars).toEqual(mockStarsResult());
  });
});
