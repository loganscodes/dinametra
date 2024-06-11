import React from 'react';
import { UITitlePatentProps } from '../../src/interfaces/interfacesUI'
import UITitlePatent from '../../src/components/UI/UITitlePatent'
import renderer from 'react-test-renderer';


describe('UITitlePatent', () => {
    test('renders correctly with props', () => {
        const props: UITitlePatentProps = {
            tooltipContent: 'Tooltip Content',
            content: 'Title Content',
            tooltipID: 'title-tooltip',
        };

        const component = renderer.create(<UITitlePatent {...props} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});