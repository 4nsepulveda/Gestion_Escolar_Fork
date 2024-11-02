// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const buttonGroup: Theme['components'] = {
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    },
    styleOverrides: {
      contained: ({ ownerState }) => ({})
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'success' },
        style: {}
      }
    ]
  }
}

export default buttonGroup
