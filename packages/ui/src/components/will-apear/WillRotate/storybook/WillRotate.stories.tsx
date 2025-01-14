import { ComponentStory } from '@storybook/react'
import { WillRotate } from '..'
import { FillBox } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, rotateOptions } from '../model/props'

export default {
  title: 'will appear/WillRotate',
  component: WillRotate,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Child elements of the element specified by as props',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    rotate: {
      control: {
        type: null,
      },
      description: 'Around which axis the elements appear as they rotate',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: defaultProps.rotate,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof WillRotate> = ({ children, ...args }) => (
  <WillRotate {...args} as={FillBox}>
    {children}
  </WillRotate>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Rotate!!',
}
playground.argTypes = {
  rotate: {
    control: {
      type: 'radio',
    },
    options: rotateOptions,
  },
}
