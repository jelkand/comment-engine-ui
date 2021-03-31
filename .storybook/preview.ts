import React from 'react'
import { DecoratorFn, Parameters } from '@storybook/react'
import { withThemeProvider } from 'storybook-addon-theme-ui'

import { blogTheme, funk } from '../src/themes'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themeUi: {
    themes: [
      { theme: blogTheme, name: 'Blog' },
      { theme: funk, name: 'Funk' },
    ],
  },
}

export const decorators: DecoratorFn[] = [withThemeProvider]
