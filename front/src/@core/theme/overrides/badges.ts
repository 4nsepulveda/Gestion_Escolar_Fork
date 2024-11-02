// MUI Imports
import type { Theme } from '@mui/material/styles'

const badges: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({})
    }
  }
}

export default badges
