// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const popover = (skin: Skin): Theme['components'] => ({
  MuiPopover: {
    styleOverrides: {
      paper: {
        ...(skin === 'bordered' ? {} : {})
      }
    }
  }
})

export default popover
