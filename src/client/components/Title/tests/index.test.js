import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Title from '../index';
import {
    Container,
    TopText,
    BottomText,
} from '../styles';

configure({ adapter: new Adapter() });

describe('Title:', () => {
    describe('index.js:', () => {
        const props = {
            topValue: 'Red',
            bottomValue: 'Tetris',
            opacity: 1,
        };
        const wrapper = mount(<Title {...props}/>);
        it('Should find a Container', () => {
            expect(wrapper.find(Container).length).toBe(1);
        });
        it('Should find a TopText with the right value', () => {
            expect(wrapper.find(TopText).length).toBe(1);
            expect(wrapper.find(TopText).children().length).toBe(1);
        });
        it('Should find a BottomText with the right value', () => {
            expect(wrapper.find(BottomText).length).toBe(1);
            expect(wrapper.find(BottomText).children().length).toBe(1);
        });
    });
});