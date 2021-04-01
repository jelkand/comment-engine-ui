import React from 'react'
import { DecoratorFn, Parameters } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'

import { blogTheme } from '../src/themes'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider theme={blogTheme}>
      <Story />
    </ThemeProvider>
  ),
]
