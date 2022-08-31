import { ComponentStory } from '@storybook/react'
import { SepiaImage } from '..'
import { commmonArgTypes } from '../../../model/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
// @ts-ignore
import sample01 from '../../../assets/myproduct.jpg'
import { effectArgTypes } from '../../model/argTypes'

export default {
  title: 'image effect/SepiaImage',
  component: SepiaImage,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...logicArgTypes,
    ...effectArgTypes,
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof SepiaImage> = ({ src, ...args }) => (
  <SepiaImage {...args} src={sample01} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
