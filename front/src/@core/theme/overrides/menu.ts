// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const menu = (skin: Skin): Theme['components'] => ({
  MuiMenu: {
    defaultProps: {
      ...(skin === 'bordered' && {
        slotProps: {
          paper: {
            elevation: 0
          }
        }
      })
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        ...(skin !== 'bordered' && {})
      })
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  }
})

export default menu
