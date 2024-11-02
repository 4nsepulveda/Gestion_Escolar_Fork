// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const snackbar = (skin: Skin): Theme['components'] => ({
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  }
})

export default snackbar
