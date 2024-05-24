import React from 'react'
import { createTest } from '@storybook/react/experimental-playwright'
import { test as base } from '@playwright/experimental-ct-react'

import animatedillustrationStoriesStories from './src/components/AnimatedIllustration/AnimatedIllustration.stories.portable'
import badgeStoriesStories from './src/components/Badge/Badge.stories.portable'
import buttonStoriesStories from './src/components/Button/Button.stories.portable'
import categoryStoriesStories from './src/components/Category/Category.stories.portable'
import errorblockStoriesStories from './src/components/ErrorBlock/ErrorBlock.stories.portable'
import footerStoriesStories from './src/components/Footer/Footer.stories.portable'
import headerStoriesStories from './src/components/Header/Header.stories.portable'
import iconStoriesStories from './src/components/Icon/Icon.stories.portable'
import iconbuttonStoriesStories from './src/components/IconButton/IconButton.stories.portable'
import logoStoriesStories from './src/components/Logo/Logo.stories.portable'
import modalStoriesStories from './src/components/Modal/Modal.stories.portable'
import pagesectionStoriesStories from './src/components/PageSection/PageSection.stories.portable'
import restaurantcardStoriesStories from './src/components/RestaurantCard/RestaurantCard.stories.portable'
import reviewStoriesStories from './src/components/Review/Review.stories.portable'
import ordersummaryStoriesStories from './src/components/ShoppingCart/OrderSummary/OrderSummary.stories.portable'
import shoppingcartmenuStoriesStories from './src/components/ShoppingCartMenu/ShoppingCartMenu.stories.portable'
import sidebarStoriesStories from './src/components/Sidebar/Sidebar.stories.portable'
import spinnerStoriesStories from './src/components/Spinner/Spinner.stories.portable'
import topbannerStoriesStories from './src/components/TopBanner/TopBanner.stories.portable'
import inputStoriesStories from './src/components/forms/Input.stories.portable'
import selectStoriesStories from './src/components/forms/Select.stories.portable'
import bodyStoriesStories from './src/components/typography/Body.stories.portable'
import headingStoriesStories from './src/components/typography/Heading.stories.portable'
import categorydetailpageStoriesStories from './src/pages/CategoryDetailPage/CategoryDetailPage.stories.portable'
import categorylistpageStoriesStories from './src/pages/CategoryListPage/CategoryListPage.stories.portable'
import categorylistStoriesStories from './src/pages/CategoryListPage/components/CategoryList/CategoryList.stories.portable'
import checkoutpageStoriesStories from './src/pages/CheckoutPage/CheckoutPage.stories.portable'
import multistepformStoriesStories from './src/pages/CheckoutPage/components/registration-form/MultiStepForm.stories.portable'
import stepindicatorStoriesStories from './src/pages/CheckoutPage/components/registration-form/StepIndicator.stories.portable'
import homepageStoriesStories from './src/pages/HomePage/HomePage.stories.portable'
import awardwinningsectionStoriesStories from './src/pages/HomePage/components/AwardWinningSection/AwardWinningSection.stories.portable'
import bannerStoriesStories from './src/pages/HomePage/components/Banner/Banner.stories.portable'
import categoriessectionStoriesStories from './src/pages/HomePage/components/CategoriesSection/CategoriesSection.stories.portable'
import restaurantssectionStoriesStories from './src/pages/HomePage/components/RestaurantsSection/RestaurantsSection.stories.portable'
import restaurantdetailpageStoriesStories from './src/pages/RestaurantDetailPage/RestaurantDetailPage.stories.portable'
import fooditemStoriesStories from './src/pages/RestaurantDetailPage/components/FoodItem/FoodItem.stories.portable'
import fooditemmodalStoriesStories from './src/pages/RestaurantDetailPage/components/FoodItemModal/FoodItemModal.stories.portable'
import successpageStoriesStories from './src/pages/SuccessPage/SuccessPage.stories.portable'
import userflowsStoriesStories from './src/pages/UserFlows.stories.portable'
import pagetemplateStoriesStories from './src/templates/PageTemplate.stories.portable'

const test = createTest(base)

test.describe('renders AnimatedIllustration.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<animatedillustrationStoriesStories.Default />)
  })
})

test.describe('renders Badge.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<badgeStoriesStories.Default />)
  })
})

test.describe('renders Button.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<buttonStoriesStories.Default />)
  })
  test('Disabled', async ({ mount }) => {
    await mount(<buttonStoriesStories.Disabled />)
  })
  test('Clear', async ({ mount }) => {
    await mount(<buttonStoriesStories.Clear />)
  })
  test('Icon', async ({ mount }) => {
    await mount(<buttonStoriesStories.Icon />)
  })
  test('IconAndText', async ({ mount }) => {
    await mount(<buttonStoriesStories.IconAndText />)
  })
})

test.describe('renders Category.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categoryStoriesStories.Default />)
  })
  test('Rounded', async ({ mount }) => {
    await mount(<categoryStoriesStories.Rounded />)
  })
})

test.describe('renders ErrorBlock.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<errorblockStoriesStories.Default />)
  })
  test('Error500', async ({ mount }) => {
    await mount(<errorblockStoriesStories.Error500 />)
  })
  test('Error404', async ({ mount }) => {
    await mount(<errorblockStoriesStories.Error404 />)
  })
})

test.describe('renders Footer.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<footerStoriesStories.Default />)
  })
})

test.describe('renders Header.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<headerStoriesStories.Default />)
  })
  test('WithCartData', async ({ mount }) => {
    await mount(<headerStoriesStories.WithCartData />)
  })
})

test.describe('renders Icon.stories stories', async () => {
  test('AllIcons', async ({ mount }) => {
    await mount(<iconStoriesStories.AllIcons />)
  })
  test('Playground', async ({ mount }) => {
    await mount(<iconStoriesStories.Playground />)
  })
})

test.describe('renders IconButton.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<iconbuttonStoriesStories.Default />)
  })
  test('Small', async ({ mount }) => {
    await mount(<iconbuttonStoriesStories.Small />)
  })
})

test.describe('renders Logo.stories stories', async () => {
  test('WithText', async ({ mount }) => {
    await mount(<logoStoriesStories.WithText />)
  })
  test('LogoOnlyLarge', async ({ mount }) => {
    await mount(<logoStoriesStories.LogoOnlyLarge />)
  })
})

test.describe('renders Modal.stories stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<modalStoriesStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<modalStoriesStories.Mobile />)
  })
})

test.describe('renders PageSection.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<pagesectionStoriesStories.Default />)
  })
  test('WithButtons', async ({ mount }) => {
    await mount(<pagesectionStoriesStories.WithButtons />)
  })
})

test.describe('renders RestaurantCard.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<restaurantcardStoriesStories.Default />)
  })
  test('New', async ({ mount }) => {
    await mount(<restaurantcardStoriesStories.New />)
  })
  test('Closed', async ({ mount }) => {
    await mount(<restaurantcardStoriesStories.Closed />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantcardStoriesStories.Loading />)
  })
})

test.describe('renders Review.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<reviewStoriesStories.Default />)
  })
  test('Excellent', async ({ mount }) => {
    await mount(<reviewStoriesStories.Excellent />)
  })
  test('VeryGood', async ({ mount }) => {
    await mount(<reviewStoriesStories.VeryGood />)
  })
  test('Adequate', async ({ mount }) => {
    await mount(<reviewStoriesStories.Adequate />)
  })
  test('VeryPoor', async ({ mount }) => {
    await mount(<reviewStoriesStories.VeryPoor />)
  })
})

test.describe('renders OrderSummary.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<ordersummaryStoriesStories.Default />)
  })
})

test.describe('renders ShoppingCartMenu.stories stories', async () => {
  test('Empty', async ({ mount }) => {
    await mount(<shoppingcartmenuStoriesStories.Empty />)
  })
  test('WithItems', async ({ mount }) => {
    await mount(<shoppingcartmenuStoriesStories.WithItems />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<shoppingcartmenuStoriesStories.Mobile />)
  })
  test('Playground', async ({ mount }) => {
    await mount(<shoppingcartmenuStoriesStories.Playground />)
  })
})

test.describe('renders Sidebar.stories stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<sidebarStoriesStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<sidebarStoriesStories.Mobile />)
  })
})

test.describe('renders Spinner.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<spinnerStoriesStories.Default />)
  })
})

test.describe('renders TopBanner.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<topbannerStoriesStories.Default />)
  })
  test('WithImage', async ({ mount }) => {
    await mount(<topbannerStoriesStories.WithImage />)
  })
})

test.describe('renders Input.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<inputStoriesStories.Default />)
  })
  test('WithLabel', async ({ mount }) => {
    await mount(<inputStoriesStories.WithLabel />)
  })
  test('WithHint', async ({ mount }) => {
    await mount(<inputStoriesStories.WithHint />)
  })
  test('Filled', async ({ mount }) => {
    await mount(<inputStoriesStories.Filled />)
  })
})

test.describe('renders Select.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<selectStoriesStories.Default />)
  })
  test('WithLabel', async ({ mount }) => {
    await mount(<selectStoriesStories.WithLabel />)
  })
})

test.describe('renders Body.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<bodyStoriesStories.Default />)
  })
})

test.describe('renders Heading.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<headingStoriesStories.Default />)
  })
})

test.describe('renders CategoryDetailPage.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorydetailpageStoriesStories.Default />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<categorydetailpageStoriesStories.Loading />)
  })
  test('Missing', async ({ mount }) => {
    await mount(<categorydetailpageStoriesStories.Missing />)
  })
})

test.describe('renders CategoryListPage.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorylistpageStoriesStories.Default />)
  })
})

test.describe('renders CategoryList.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorylistStoriesStories.Default />)
  })
})

test.describe('renders CheckoutPage.stories stories', async () => {
  test('Empty', async ({ mount }) => {
    await mount(<checkoutpageStoriesStories.Empty />)
  })
  test('WithItems', async ({ mount }) => {
    await mount(<checkoutpageStoriesStories.WithItems />)
  })
})

test.describe('renders MultiStepForm.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<multistepformStoriesStories.Default />)
  })
})

test.describe('renders StepIndicator.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<stepindicatorStoriesStories.Default />)
  })
})

test.describe('renders HomePage.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<homepageStoriesStories.Default />)
  })
})

test.describe('renders AwardWinningSection.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<awardwinningsectionStoriesStories.Default />)
  })
})

test.describe('renders Banner.stories stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<bannerStoriesStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<bannerStoriesStories.Mobile />)
  })
})

test.describe('renders CategoriesSection.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categoriessectionStoriesStories.Default />)
  })
})

test.describe('renders RestaurantsSection.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<restaurantssectionStoriesStories.Default />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantssectionStoriesStories.Loading />)
  })
})

test.describe('renders RestaurantDetailPage.stories stories', async () => {
  test('Success', async ({ mount }) => {
    await mount(<restaurantdetailpageStoriesStories.Success />)
  })
  test('WithModalOpen', async ({ mount }) => {
    await mount(<restaurantdetailpageStoriesStories.WithModalOpen />)
  })
  test('WithItemsInTheCart', async ({ mount }) => {
    await mount(<restaurantdetailpageStoriesStories.WithItemsInTheCart />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantdetailpageStoriesStories.Loading />)
  })
  test('NotFound', async ({ mount, page }) => {
    await page.waitForLoadState('networkidle')
    await mount(<restaurantdetailpageStoriesStories.NotFound />)
  })
  test('Error', async ({ mount }) => {
    await mount(<restaurantdetailpageStoriesStories.Error />)
  })
})

test.describe('renders FoodItem.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<fooditemStoriesStories.Default />)
  })
  test('WithQuantity', async ({ mount }) => {
    await mount(<fooditemStoriesStories.WithQuantity />)
  })
})

test.describe('renders FoodItemModal.stories stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<fooditemmodalStoriesStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<fooditemmodalStoriesStories.Mobile />)
  })
})

test.describe('renders SuccessPage.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<successpageStoriesStories.Default />)
  })
})

test.describe('renders UserFlows.stories stories', async () => {
  test('Home', async ({ mount }) => {
    await mount(<userflowsStoriesStories.Home />)
  })
  test('ToCategoryListPage', async ({ mount }) => {
    await mount(<userflowsStoriesStories.ToCategoryListPage />)
  })
  test('ToCategoryDetailPage', async ({ mount }) => {
    await mount(<userflowsStoriesStories.ToCategoryDetailPage />)
  })
  test('ToRestaurantDetailPage', async ({ mount }) => {
    await mount(<userflowsStoriesStories.ToRestaurantDetailPage />)
  })
  test('ToCheckoutPage', async ({ mount }) => {
    await mount(<userflowsStoriesStories.ToCheckoutPage />)
  })
  test('ToSuccessPage', async ({ mount }) => {
    await mount(<userflowsStoriesStories.ToSuccessPage />)
  })
})

test.describe('renders PageTemplate.stories stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<pagetemplateStoriesStories.Default />)
  })
  test('DefaultWithItemsInTheCart', async ({ mount }) => {
    await mount(<pagetemplateStoriesStories.DefaultWithItemsInTheCart />)
  })
  test('StickyHeader', async ({ mount }) => {
    await mount(<pagetemplateStoriesStories.StickyHeader />)
  })
  test('Basic', async ({ mount }) => {
    await mount(<pagetemplateStoriesStories.Basic />)
  })
})
