import { ComponentStory } from '@storybook/react'
import { SwitchTable } from '..'
import { DarkTextBox } from '../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'table/SwitchTable',
  component: SwitchTable,
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

const Template: ComponentStory<typeof SwitchTable> = ({
  children,
  ...args
}) => <SwitchTable {...args}>{children}</SwitchTable>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
