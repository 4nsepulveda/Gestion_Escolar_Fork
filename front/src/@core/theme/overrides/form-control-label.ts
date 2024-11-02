// MUI Imports
import type { Theme } from '@mui/material/styles'

const formControlLabel: Theme['components'] = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginInlineStart: theme.spacing(-2)
      }),
      label: {}
    }
  }
}

export default formControlLabel
