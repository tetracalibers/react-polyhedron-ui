module.exports = {
  stories: [
    //'../packages/**/*.stories.@(tsx|ts|mdx)',
    //'../core/mock/src/components/**/*.stories.@(tsx|ts|mdx)',
    '../examples/syntax/src/components/**/*.stories.@(tsx|ts|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@whitespace/storybook-addon-html',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
}
