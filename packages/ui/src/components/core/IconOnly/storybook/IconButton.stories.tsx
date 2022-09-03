import { ComponentStory } from '@storybook/react'
import { thisArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { IconOnly } from '..'
import { DocsPage } from '../../Button/storybook/docsPage'
import { ImTwitter } from 'react-icons/im'

export default {
  title: 'core/IconOnly/IconOnly.Button',
  component: IconOnly,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    ...thisArgTypes,
  },
}

const Template: ComponentStory<typeof IconOnly.Button> = () => (
  <IconOnly.Button icon={<ImTwitter />} label='go to Twitter' />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
