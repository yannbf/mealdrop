import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Button.stories';

const { Default } = composeStories(stories);

test('renders primary button', () => {
  render(<Default>Hello world</Default>);
  const buttonElement = screen.getByText(/Hello world/i);
  expect(buttonElement).not.toBeNull();
});

test('onclick handler is called', async () => {
  const onClickSpy = jest.fn();
  render(<Default onClick={onClickSpy} />);
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});