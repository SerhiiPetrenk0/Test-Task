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
    let ShallowComment: (arg0: { rating: string; comments: string; }) => any;
    let MountComment: (arg0: { rating: string; comments: string; }) => any;

    beforeEach(() => {
        ShallowComment = (dataItem: TypePostForm) => shallow(<Comment ListComment={dataItem} />);
        MountComment = (dataItem: TypePostForm) => mount(<Comment ListComment={dataItem} />);
    })
    it('should match a snapshot (Comment.test.tsx.snap)', () => {
        const component = ShallowComment(MockCommentItem);
        expect(toJson(component)).toMatchSnapshot();
    });
    
    it('should have ListComment prop', () => {
        const component = MountComment(MockCommentItem);
        expect(component.props().ListComment).toEqual(MockCommentItem);
    });
    
    it('should render comments', () => {
        const component = MountComment(MockCommentItem);
        expect(component.text()).toEqual(MockCommentItem.comments);
    });
    
    it('should render rating stars', () => {
        const component = MountComment(MockCommentItem).find('StarBar');
        expect(component.prop('count')).toEqual(MockCommentItem.rating);
    });
});
