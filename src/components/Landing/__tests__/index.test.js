import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Landing from '..';
afterEach(cleanup);

describe('Landing component', () => {
    //first test
    it('renders', () => {
        render(<Landing />);
    });

    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Landing />);
        expect(asFragment()).toMatchSnapshot();
    });
})