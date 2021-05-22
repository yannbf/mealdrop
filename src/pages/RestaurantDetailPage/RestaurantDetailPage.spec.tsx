import { mount } from "@cypress/react";
import { composeStories } from '@storybook/testing-react';

import * as stories from './RestaurantDetailPage.stories'

const { Success, Loading, Error, NotFound } = composeStories(stories)

describe('RestaurantDetailPage', () => {
  it('Should add an item to cart', () => {
    mount(<Success />)
      .get('body')
      .findByText(/Cheeseburger/i)
      .click()
      .get('body')
      .findByLabelText('confirm')
      .click()
      .get('body')
      .findByLabelText('food quantity')
      .should('contain', '1')
  })

  it('Should display an error screen', () => {
    mount(<Error />)
      .get('body')
      .findByText('Something went wrong!').should('exist')
  })
  it('Should display a loading screen', async () => {
    mount(<Loading />)
      .get('body')
      .findByText('Loading..').should('exist')
  })
  it('Should display a 404 screen', async () => {
    mount(<NotFound />)
      .get('body')
      .findByText("We can't find this page").should('exist')
  })
})
