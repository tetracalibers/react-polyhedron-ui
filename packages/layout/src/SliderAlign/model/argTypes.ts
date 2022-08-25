import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numerical value indicating the size of the gap between each item',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null,
      },
    },
  },
  spaceU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of spaceV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null,
      },
    },
  },
  hideScrollBar: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to hide scrollbars',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar style',
      defaultValue: {
        summary: defaultProps.hideScrollBar,
        details: null,
      },
    },
  },
  barHeightV: {
    control: {
      type: 'number',
    },
    description: 'Numeric value representing the height of the scrollbar area',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar style',
      defaultValue: {
        summary: defaultProps.barHeightV,
        details: null,
      },
    },
  },
  barHeightU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of barHeightV',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar style',
      defaultValue: {
        summary: defaultProps.barHeightU,
        details: null,
      },
    },
  },
}
