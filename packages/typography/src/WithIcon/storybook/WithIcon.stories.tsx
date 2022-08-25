import { ComponentStory } from '@storybook/react'
import { WithIcon } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox, DarkTextLink } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { CheckIcon, HeartIcon } from '@polym-ui/symbol'

export default {
  title: 'typography/WithIcon',
  component: WithIcon,
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof WithIcon> = ({ children, ...args }) => (
  <WithIcon {...args} as={DarkTextLink} href='#'>
    {children}
  </WithIcon>
)

export const prefixIcon = Template.bind({})
prefixIcon.args = {
  ...defaultProps,
  children: (
    <>
      <CheckIcon />I agree.
    </>
  ),
  iconChild: 'first',
}

export const suffixIcon = Template.bind({})
suffixIcon.args = {
  ...defaultProps,
  children: (
    <>
      I Love You
      <HeartIcon sizeV={1.5} sizeU={'em'} />
    </>
  ),
  iconChild: 'last',
  alignItems: 'center',
}
