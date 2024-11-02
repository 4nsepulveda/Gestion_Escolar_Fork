// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const dialog = (skin: Skin): Theme['components'] => ({
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        ...(skin !== 'bordered' ? {} : {}),
        [theme.breakpoints.down('sm')]: {
          '&:not(.MuiDialog-paperFullScreen)': {}
        }
      })
    }
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h5'
    },
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  }
})

export default dialog
