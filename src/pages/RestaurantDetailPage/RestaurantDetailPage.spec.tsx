import { mount } from "@cypress/react";
import { composeStories } from '@storybook/testing-react';

import * as stories from './RestaurantDetailPage.stories'

const { Success, Loading, Error, NotFound } = composeStories(stories)

describe('RestaurantDetailPage', () => {
  it.only('Should add an item to cart', async () => {
    mount(<Success />)

    const foodItem = cy.findByText(/Cheeseburger/i)
    foodItem.click()

    const modalButton = cy.findByLabelText('confirm')
    modalButton.click()

    cy.findByLabelText('food quantity').contains('1')
  })
  it('Should display an error screen', async () => {
    mount(<Error />)
    cy.findByText('Something went wrong!').should('exist')
  })
  it('Should display a loading screen', async () => {
    mount(<Loading />)
    cy.findByText('Loading..').should('exist')
  })
  it('Should display a 404 screen', async () => {
    mount(<NotFound />)
    cy.findByText("We can't find this page").should('exist')
  })
})
