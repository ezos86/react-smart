import * as React from 'react';
import { shallow } from 'enzyme';
import Sample from '../../views/Sample.view';

describe('Login', () => {
    it('Make sure form exists', () => {
        const wrapper = shallow(<Sample />);
        expect(wrapper.find('.view-content').exists());
    });

    it('renders login without crash', () => {
        expect(shallow(<Sample />));
    });
});
