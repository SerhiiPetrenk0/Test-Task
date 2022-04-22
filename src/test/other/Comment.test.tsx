import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import 'jsdom-global/register';

import { Comment } from "../../components/other/Comment";

configure({ adapter: new Adapter() })

describe('Comment component', () => {
    const dataItem = {
        rating: "4",
        comments: "Odio ut qui. Autem cumque deleniti. Quia provident inventore. Enim ipsum totam."
    }    
    it('Snapshot Comment show', () => {
        const component = shallow(<Comment ListComment={dataItem} />)
        expect(toJson(component)).toMatchSnapshot();
    })
    it('props', () => {
        const component = mount(<Comment ListComment={dataItem} />)
        expect(component.props().ListComment).toEqual(dataItem)
    })
    it('render comment', () => {
        const component = mount(<Comment ListComment={dataItem} />)
        expect(component.text()).toEqual(dataItem.comments)
    })
    it('render rating', () => {
        const component = mount(<Comment ListComment={dataItem} />).find('StarBar')
        expect(component.prop('count')).toEqual(dataItem.rating)
    })
})