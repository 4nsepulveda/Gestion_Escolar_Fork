// MUI Imports
import type { Theme } from '@mui/material/styles'

const progress: Theme['components'] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  }
}

export default progress
