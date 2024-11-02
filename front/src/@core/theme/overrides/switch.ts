// MUI Imports
import type { Theme } from '@mui/material/styles'

const switchOverrides: Theme['components'] = {
  MuiSwitch: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({}),
      switchBase: {},
      thumb: {},
      track: {}
    }
  }
}

export default switchOverrides
