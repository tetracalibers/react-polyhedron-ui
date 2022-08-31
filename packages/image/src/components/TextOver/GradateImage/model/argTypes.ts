import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
  bgDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time required to animate the background',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.bgDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
  txtDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time it takes for text above the image to appear',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.txtDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
  coverOpacity: {
    ...withDefaultAs('opacity'),
    description: 'Transparency of the gradient over the image',
    table: {
      ...withDefaultAs('opacity').table,
      defaultValue: {
        summary: defaultProps.coverOpacity,
        details: null,
      },
      category: 'effect',
      subcategory: 'filter',
    },
  },
  gradientFrom: {
    ...withDefaultAs('color'),
    description: 'Linear gradient starting color',
    table: {
      ...withDefaultAs('color').table,
      defaultValue: {
        summary: defaultProps.gradientFrom,
        details: null,
      },
      category: 'effect',
      subcategory: 'gradation',
    },
  },
  gradientTo: {
    ...withDefaultAs('color'),
    description: 'Linear gradient end color',
    table: {
      ...withDefaultAs('color').table,
      defaultValue: {
        summary: defaultProps.gradientTo,
        details: null,
      },
      category: 'effect',
      subcategory: 'gradation',
    },
  },
  gradientSlope: {
    control: {
      type: 'number',
    },
    description: 'Axis tilt of gradient color change (deg)',
    table: {
      defaultValue: {
        summary: defaultProps.gradientSlope,
        details: null,
      },
      category: 'effect',
      subcategory: 'gradation',
    },
  },
}
