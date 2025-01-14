import { ComponentStory } from '@storybook/react'
import { DropdownSelect } from '..'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/DropdownSelect',
  component: DropdownSelect,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
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
    ...logicArgTypes,
  },
}

const Template: ComponentStory<typeof DropdownSelect> = ({
  children,
  ...args
  // @ts-ignore
}) => <DropdownSelect {...args}>{children}</DropdownSelect>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  name: 'number',
  choices: [...new Array(50)].map((_, idx) => ({
    value: idx + 1,
    label: `choice${`${idx + 1}`.padStart(2, '0')}`,
  })),
}
playground.argTypes = {}
