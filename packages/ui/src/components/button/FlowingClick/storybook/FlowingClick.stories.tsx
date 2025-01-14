import { ComponentStory } from '@storybook/react'
import FlowingClick, { defaultProps } from '..'
import { presets } from '../model/props'
import _ from 'lodash'
import { styleArgTypes } from '../css-props/argTypes'
import { commmonArgTypes } from '../../common/argTypes'

export default {
  title: 'Button&Link/FlowingClick',
  component: FlowingClick,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'label',
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
    preset: {
      control: {
        type: null,
      },
      defaultValue: defaultProps.preset,
      description: 'Type of Animation',
      table: {
        type: {
          summary: null,
        },
        defaultValue: {
          summary: defaultProps.preset,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...styleArgTypes,
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof FlowingClick> = ({
  children,
  preset,
  ...args
}) => (
  <FlowingClick preset={preset} {...args}>
    {children}
  </FlowingClick>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'from-left',
}
playground.argTypes = {
  preset: {
    control: {
      type: 'radio',
    },
    options: presets,
  },
}

export const from_left = Template.bind({})
from_left.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'from-left',
}

export const from_right = Template.bind({})
from_right.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'from-right',
}

export const up = Template.bind({})
up.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'up',
}

export const down = Template.bind({})
down.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'down',
}

export const center_to_horizontal = Template.bind({})
center_to_horizontal.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'center-to-horizontal',
}

export const center_to_vertical = Template.bind({})
center_to_vertical.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'center-to-vertical',
}

export const diagonal = Template.bind({})
diagonal.args = {
  ...defaultProps,
  children: 'flowing!!',
  preset: 'diagonal',
}
