import preview from '#.storybook/preview'

import { MultiStepForm } from './MultiStepForm'

const meta = preview.meta({
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-3309&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Default = meta.story()
