import React from "react";
import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { LogInForm } from "../../components/other/LogInForm";
import store from "../../redux";

configure({ adapter: new Adapter() })

describe('LogInForm component', () => {
    it('Snapshot LogInForm show', () => {
        const tree = renderer.create(<Provider store={store}><LogInForm show={true} handleClose={() => null} /></Provider>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    })

    it('Snapshot LogInForm hide', () => {
        const tree = renderer.create(<Provider store={store}><LogInForm show={false} handleClose={() => null} /></Provider>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
})