import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import 'jsdom-global/register';

import { Comment } from '../components/other/Comment';

import { MockCommentItem } from './MockData';
import { TypePostForm } from '../interface';

configure({ adapter: new Adapter() });

describe('Comment component', () => {
    const ShallowComment = (dataItem: TypePostForm) => shallow(<Comment ListComment={dataItem} />);
    const MountComment = (dataItem: TypePostForm) => mount(<Comment ListComment={dataItem} />);
    
    it('should match a snapshot (Comment.test.tsx.snap)', () => {
        const component = ShallowComment(MockCommentItem)
        expect(toJson(component)).toMatchSnapshot();
    });
    
    it('should match to props', () => {
        const component = MountComment(MockCommentItem);
        expect(component.props().ListComment).toEqual(MockCommentItem);
    });
    
    it('should match to comment', () => {
        const component = MountComment(MockCommentItem);
        expect(component.text()).toEqual(MockCommentItem.comments);
    });
    
    it('should match to rating', () => {
        const component = MountComment(MockCommentItem).find('StarBar');
        expect(component.prop('count')).toEqual(MockCommentItem.rating);
    });
});
