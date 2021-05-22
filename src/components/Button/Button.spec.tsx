import { mount } from "@cypress/react";
import { composeStories } from '@storybook/testing-react';

import * as stories from './Button.stories';

const { Default, Disabled } = composeStories(stories);

it.only('renders button with custom children', () => {
  mount(<Default />)
    .get('body')
    .findByText(/Button/i).should('exist');
});

it('onclick handler is not called when disabled', () => {
  mount(<Disabled />)
    .get('body')
    .findByRole('button').should('be.disabled');
});
