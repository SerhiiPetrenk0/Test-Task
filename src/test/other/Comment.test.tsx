import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

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
})