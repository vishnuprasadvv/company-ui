import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/design-system/theme/ThemeProvider'
import '../src/index.css'
import { theme } from '../src/design-system/theme/theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview