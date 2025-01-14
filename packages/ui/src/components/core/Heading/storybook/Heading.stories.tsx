import { ComponentStory } from '@storybook/react'
import { coreArgTypes } from '../model/argTypes'
import { defaultHeadingCoreProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Heading } from '..'

export default {
  title: 'core/Heading',
  component: Heading,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Component that wraps the "button" tag in HTML',
      },
    },
  },
  argTypes: {
    ...coreArgTypes,
  },
}

const Template: ComponentStory<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultHeadingCoreProps,
  children: 'Correct Usage',
}

export const violationUsage01 = Template.bind({})
violationUsage01.args = {
  ...defaultHeadingCoreProps,
  children: <h1>Examples of Violations</h1>,
}
violationUsage01.argTypes = {
  children: {
    control: {
      type: null,
    },
  },
}
