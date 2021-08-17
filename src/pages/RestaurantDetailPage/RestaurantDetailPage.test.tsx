import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RestaurantDetailPage.stories'

const { Success, Loading, Error, NotFound } = composeStories(stories)

describe('RestaurantDetailPage', () => {
  test('Should add an item to cart', async () => {
    render(<Success />)

    const foodItem = await screen.findByText(/Cheeseburger/i)
    userEvent.click(foodItem)

    const modalButton = await screen.findByLabelText('confirm')
    userEvent.click(modalButton)

    expect(within(foodItem.parentElement!).getByLabelText('food quantity').textContent).toEqual('1')
  })
  test('Should display an error screen', async () => {
    render(<Error />)
    await waitFor(() => expect(screen.getByText('Something went wrong!')).toBeInTheDocument())
  })
  test('Should display a loading screen', async () => {
    render(<Loading />)
    await waitFor(() => expect(screen.getByText('Looking for some food...')).toBeInTheDocument())
  })
  test('Should display a 404 screen', async () => {
    render(<NotFound />)
    await waitFor(() => expect(screen.getByText("We can't find this page")).toBeInTheDocument())
  })
})

// If we were to not use @storyboook/testing-react:
// describe('RestaurantDetailPage - without @storybook/testing-react', () => {
//   const mockStore = {
//     getState: () => {
//       return {
//         cartItems: [],
//       }
//     },
//     subscribe: () => 0,
//     dispatch: () => 0,
//   }

//   test('Should add an item to cart', async () => {
//     server.use(
//       rest.get(
//         REQUEST_URL,
//         (req, res, ctx) => {
//           return res(ctx.json(restaurants[0]))
//         }
//       )
//     )

//     render(
//       <Router
//         history={createMemoryHistory({ initialEntries: ['/restaurants/1'] })}
//       >
//         <Route path="/restaurants/:id"></Route>
//         <StoreProvider store={mockStore}>
//           <RestaurantDetailPage />
//         </StoreProvider>
//       </Router>
//     )

//     const foodItem = await screen.findByText(/Cheeseburger/i)
//     userEvent.click(foodItem)

//     const modalButton = await screen.findByLabelText('confirm')
//     userEvent.click(modalButton)
//     expect(
//       within(foodItem.parentElement!).getByLabelText('food quantity')
//         .textContent
//     ).toEqual('1')
//   });

//   test('Should display an error screen', async () => {
//     server.use(
//       rest.get(
//         REQUEST_URL,
//         (req, res, ctx) => {
//           return res(
//             ctx.status(500)
//           )
//         }
//       ),
//     )

//     render(
//       <Router
//         history={createMemoryHistory({ initialEntries: ['/restaurants/1'] })}
//       >
//         <Route path="/restaurants/:id"></Route>
//         <StoreProvider store={mockStore}>
//           <RestaurantDetailPage />
//         </StoreProvider>
//       </Router>
//     )
//     await waitFor(() =>
//       expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
//     )
//   })
//   test('Should display a loading screen', async () => {
//     server.use(
//       rest.get(
//         REQUEST_URL,
//         (req, res, ctx) => {
//           return res(ctx.delay('infinite'))
//         }
//       ),
//     )

//     render(
//       <Router
//         history={createMemoryHistory({ initialEntries: ['/restaurants/1'] })}
//       >
//         <Route path="/restaurants/:id"></Route>
//         <StoreProvider store={mockStore}>
//           <RestaurantDetailPage />
//         </StoreProvider>
//       </Router>
//     )

//     await waitFor(() =>
//       expect(screen.getByText('Loading..')).toBeInTheDocument()
//     )
//   })
//   test('Should display a 404 screen', async () => {
//     server.use(
//       rest.get(
//         REQUEST_URL,
//         (req, res, ctx) => {
//           return res(
//             ctx.status(404)
//           )
//         }
//       ),
//     )

//     render(
//       <Router
//         history={createMemoryHistory({ initialEntries: ['/restaurants/1'] })}
//       >
//         <Route path="/restaurants/:id"></Route>
//         <StoreProvider store={mockStore}>
//           <RestaurantDetailPage />
//         </StoreProvider>
//       </Router>
//     )

//     await waitFor(() =>
//       expect(screen.getByText("We can't find this page")).toBeInTheDocument()
//     )
//   })
// });
