// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconButton: Theme['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root, & i, & svg': {}
      },
      sizeSmall: ({ theme }) => ({}),
      sizeMedium: ({ theme }) => ({}),
      sizeLarge: ({ theme }) => ({})
    },
    variants: [
      {
        props: { color: 'default' },
        style: {}
      },
      {
        props: { color: 'primary' },
        style: {}
      },
      {
        props: { color: 'secondary' },
        style: {}
      },
      {
        props: { color: 'error' },
        style: {}
      },
      {
        props: { color: 'warning' },
        style: {}
      },
      {
        props: { color: 'info' },
        style: {}
      },
      {
        props: { color: 'success' },
        style: {}
      }
    ]
  }
}

export default iconButton
