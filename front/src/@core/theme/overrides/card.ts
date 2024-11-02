// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const card = (skin: Skin): Theme['components'] => {
  return {
    MuiCard: {
      defaultProps: {
        ...(skin === 'bordered' && {
          variant: 'outlined'
        })
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant !== 'outlined' && {})
        })
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({}),
        subheader: ({ theme }) => ({
          ...theme.typography.subtitle1
        }),
        action: ({ theme }) => ({
          ...theme.typography.body1
        })
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({})
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({})
      }
    }
  }
}

export default card
