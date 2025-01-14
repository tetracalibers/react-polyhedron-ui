import { defaultProps, directionOptions } from './props'

export const logicArgTypes = {
  direction: {
    control: {
      type: 'select',
    },
    options: directionOptions,
    description: 'Direction of arrow',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.direction,
        details: null,
      },
    },
  },
  thickness: {
    control: {
      type: 'number',
    },
    description: 'Thickness of arrow',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.thickness,
        details: null,
      },
    },
  },
}
