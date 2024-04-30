// @ts-expect-error missing types
import { createTest } from '@storybook/react/experimental-playwright';
import { test as base } from '@playwright/experimental-ct-react17';

import animatedillustrationStories from './components/AnimatedIllustration/AnimatedIllustration.stories.portable';
import badgeStories from './components/Badge/Badge.stories.portable';
import buttonStories from './components/Button/Button.stories.portable';
import categoryStories from './components/Category/Category.stories.portable';
import errorblockStories from './components/ErrorBlock/ErrorBlock.stories.portable';
import footerStories from './components/Footer/Footer.stories.portable';
import headerStories from './components/Header/Header.stories.portable';
import iconStories from './components/Icon/Icon.stories.portable';
import iconbuttonStories from './components/IconButton/IconButton.stories.portable';
import logoStories from './components/Logo/Logo.stories.portable';
import modalStories from './components/Modal/Modal.stories.portable';
import pagesectionStories from './components/PageSection/PageSection.stories.portable';
import restaurantcardStories from './components/RestaurantCard/RestaurantCard.stories.portable';
import reviewStories from './components/Review/Review.stories.portable';
import ordersummaryStories from './components/ShoppingCart/OrderSummary/OrderSummary.stories.portable';
import shoppingcartmenuStories from './components/ShoppingCartMenu/ShoppingCartMenu.stories.portable';
import sidebarStories from './components/Sidebar/Sidebar.stories.portable';
import spinnerStories from './components/Spinner/Spinner.stories.portable';
import topbannerStories from './components/TopBanner/TopBanner.stories.portable';
import inputStories from './components/forms/Input.stories.portable';
import selectStories from './components/forms/Select.stories.portable';
import bodyStories from './components/typography/Body.stories.portable';
import headingStories from './components/typography/Heading.stories.portable';
import categorydetailpageStories from './pages/CategoryDetailPage/CategoryDetailPage.stories.portable';
import categorylistpageStories from './pages/CategoryListPage/CategoryListPage.stories.portable';
import categorylistStories from './pages/CategoryListPage/components/CategoryList/CategoryList.stories.portable';
import checkoutpageStories from './pages/CheckoutPage/CheckoutPage.stories.portable';
import multistepformStories from './pages/CheckoutPage/components/registration-form/MultiStepForm.stories.portable';
import stepindicatorStories from './pages/CheckoutPage/components/registration-form/StepIndicator.stories.portable';
import homepageStories from './pages/HomePage/HomePage.stories.portable';
import awardwinningsectionStories from './pages/HomePage/components/AwardWinningSection/AwardWinningSection.stories.portable';
import bannerStories from './pages/HomePage/components/Banner/Banner.stories.portable';
import categoriessectionStories from './pages/HomePage/components/CategoriesSection/CategoriesSection.stories.portable';
import restaurantssectionStories from './pages/HomePage/components/RestaurantsSection/RestaurantsSection.stories.portable';
import restaurantdetailpageStories from './pages/RestaurantDetailPage/RestaurantDetailPage.stories.portable';
import fooditemStories from './pages/RestaurantDetailPage/components/FoodItem/FoodItem.stories.portable';
import fooditemmodalStories from './pages/RestaurantDetailPage/components/FoodItemModal/FoodItemModal.stories.portable';
import successpageStories from './pages/SuccessPage/SuccessPage.stories.portable';
import userflowsStories from './pages/UserFlows.stories.portable';
import pagetemplateStories from './templates/PageTemplate.stories.portable';


const test = createTest(base);

test.describe('renders AnimatedIllustration stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<animatedillustrationStories.Default />)
  })
})

test.describe('renders Badge stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<badgeStories.Default />)
  })
})

test.describe('renders Button stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<buttonStories.Default />)
  })
  test('Disabled', async ({ mount }) => {
    await mount(<buttonStories.Disabled />)
  })
  test('Clear', async ({ mount }) => {
    await mount(<buttonStories.Clear />)
  })
  test('Icon', async ({ mount }) => {
    await mount(<buttonStories.Icon />)
  })
  test('IconAndText', async ({ mount }) => {
    await mount(<buttonStories.IconAndText />)
  })
})

test.describe('renders Category stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categoryStories.Default />)
  })
  test('Rounded', async ({ mount }) => {
    await mount(<categoryStories.Rounded />)
  })
})

test.describe('renders ErrorBlock stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<errorblockStories.Default />)
  })
  test('Error500', async ({ mount }) => {
    await mount(<errorblockStories.Error500 />)
  })
  test('Error404', async ({ mount }) => {
    await mount(<errorblockStories.Error404 />)
  })
})

test.describe('renders Footer stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<footerStories.Default />)
  })
})

test.describe('renders Header stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<headerStories.Default />)
  })
  test('WithCartData', async ({ mount }) => {
    await mount(<headerStories.WithCartData />)
  })
})

test.describe('renders Icon stories', async () => {
  test('AllIcons', async ({ mount }) => {
    await mount(<iconStories.AllIcons />)
  })
  test('Playground', async ({ mount }) => {
    await mount(<iconStories.Playground />)
  })
})

test.describe('renders IconButton stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<iconbuttonStories.Default />)
  })
  test('Small', async ({ mount }) => {
    await mount(<iconbuttonStories.Small />)
  })
})

test.describe('renders Logo stories', async () => {
  test('WithText', async ({ mount }) => {
    await mount(<logoStories.WithText />)
  })
  test('LogoOnlyLarge', async ({ mount }) => {
    await mount(<logoStories.LogoOnlyLarge />)
  })
})

test.describe('renders Modal stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<modalStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<modalStories.Mobile />)
  })
})

test.describe('renders PageSection stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<pagesectionStories.Default />)
  })
  test('WithButtons', async ({ mount }) => {
    await mount(<pagesectionStories.WithButtons />)
  })
})

test.describe('renders RestaurantCard stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<restaurantcardStories.Default />)
  })
  test('New', async ({ mount }) => {
    await mount(<restaurantcardStories.New />)
  })
  test('Closed', async ({ mount }) => {
    await mount(<restaurantcardStories.Closed />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantcardStories.Loading />)
  })
})

test.describe('renders Review stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<reviewStories.Default />)
  })
  test('Excellent', async ({ mount }) => {
    await mount(<reviewStories.Excellent />)
  })
  test('VeryGood', async ({ mount }) => {
    await mount(<reviewStories.VeryGood />)
  })
  test('Adequate', async ({ mount }) => {
    await mount(<reviewStories.Adequate />)
  })
  test('VeryPoor', async ({ mount }) => {
    await mount(<reviewStories.VeryPoor />)
  })
})

test.describe('renders OrderSummary stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<ordersummaryStories.Default />)
  })
})

test.describe('renders ShoppingCartMenu stories', async () => {
  test('Empty', async ({ mount }) => {
    await mount(<shoppingcartmenuStories.Empty />)
  })
  test('WithItems', async ({ mount }) => {
    await mount(<shoppingcartmenuStories.WithItems />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<shoppingcartmenuStories.Mobile />)
  })
  test('Playground', async ({ mount }) => {
    await mount(<shoppingcartmenuStories.Playground />)
  })
})

test.describe('renders Sidebar stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<sidebarStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<sidebarStories.Mobile />)
  })
})

test.describe('renders Spinner stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<spinnerStories.Default />)
  })
})

test.describe('renders TopBanner stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<topbannerStories.Default />)
  })
  test('WithImage', async ({ mount }) => {
    await mount(<topbannerStories.WithImage />)
  })
})

test.describe('renders Input stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<inputStories.Default />)
  })
  test('WithLabel', async ({ mount }) => {
    await mount(<inputStories.WithLabel />)
  })
  test('WithHint', async ({ mount }) => {
    await mount(<inputStories.WithHint />)
  })
  test('Filled', async ({ mount }) => {
    await mount(<inputStories.Filled />)
  })
})

test.describe('renders Select stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<selectStories.Default />)
  })
  test('WithLabel', async ({ mount }) => {
    await mount(<selectStories.WithLabel />)
  })
})

test.describe('renders Body stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<bodyStories.Default />)
  })
})

test.describe('renders Heading stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<headingStories.Default />)
  })
})

test.describe('renders CategoryDetailPage stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorydetailpageStories.Default />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<categorydetailpageStories.Loading />)
  })
  test('Missing', async ({ mount }) => {
    await mount(<categorydetailpageStories.Missing />)
  })
})

test.describe('renders CategoryListPage stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorylistpageStories.Default />)
  })
})

test.describe('renders CategoryList stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categorylistStories.Default />)
  })
})

test.describe('renders CheckoutPage stories', async () => {
  test('Empty', async ({ mount }) => {
    await mount(<checkoutpageStories.Empty />)
  })
  test('WithItems', async ({ mount }) => {
    await mount(<checkoutpageStories.WithItems />)
  })
})

test.describe('renders MultiStepForm stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<multistepformStories.Default />)
  })
})

test.describe('renders StepIndicator stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<stepindicatorStories.Default />)
  })
})

test.describe('renders HomePage stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<homepageStories.Default />)
  })
})

test.describe('renders AwardWinningSection stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<awardwinningsectionStories.Default />)
  })
})

test.describe('renders Banner stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<bannerStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<bannerStories.Mobile />)
  })
})

test.describe('renders CategoriesSection stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<categoriessectionStories.Default />)
  })
})

test.describe('renders RestaurantsSection stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<restaurantssectionStories.Default />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantssectionStories.Loading />)
  })
})

test.describe('renders RestaurantDetailPage stories', async () => {
  test('Success', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.Success />)
  })
  test('WithModalOpen', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.WithModalOpen />)
  })
  test('WithItemsInTheCart', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.WithItemsInTheCart />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.Loading />)
  })
  test.skip('NotFound', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.NotFound />)
  })
  test.skip('Error', async ({ mount }) => {
    await mount(<restaurantdetailpageStories.Error />)
  })
})

test.describe('renders FoodItem stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<fooditemStories.Default />)
  })
  test('WithQuantity', async ({ mount }) => {
    await mount(<fooditemStories.WithQuantity />)
  })
})

test.describe('renders FoodItemModal stories', async () => {
  test('Desktop', async ({ mount }) => {
    await mount(<fooditemmodalStories.Desktop />)
  })
  test('Mobile', async ({ mount }) => {
    await mount(<fooditemmodalStories.Mobile />)
  })
})

test.describe('renders SuccessPage stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<successpageStories.Default />)
  })
})

test.describe.skip('renders UserFlows stories', async () => {
  test('Home', async ({ mount }) => {
    await mount(<userflowsStories.Home />)
  })
  test('ToCategoryListPage', async ({ mount }) => {
    await mount(<userflowsStories.ToCategoryListPage />)
  })
  test('ToCategoryDetailPage', async ({ mount }) => {
    await mount(<userflowsStories.ToCategoryDetailPage />)
  })
  test('ToRestaurantDetailPage', async ({ mount }) => {
    await mount(<userflowsStories.ToRestaurantDetailPage />)
  })
  test('ToCheckoutPage', async ({ mount }) => {
    await mount(<userflowsStories.ToCheckoutPage />)
  })
  test('ToSuccessPage', async ({ mount }) => {
    await mount(<userflowsStories.ToSuccessPage />)
  })
  test('EndToEnd', async ({ mount }) => {
    await mount(<userflowsStories.EndToEnd />)
  })
})

test.describe('renders PageTemplate stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<pagetemplateStories.Default />)
  })
  test('DefaultWithItemsInTheCart', async ({ mount }) => {
    await mount(<pagetemplateStories.DefaultWithItemsInTheCart />)
  })
  test('StickyHeader', async ({ mount }) => {
    await mount(<pagetemplateStories.StickyHeader />)
  })
  test('Basic', async ({ mount }) => {
    await mount(<pagetemplateStories.Basic />)
  })
})

