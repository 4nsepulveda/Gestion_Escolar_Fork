// MUI Imports
import type { Theme } from '@mui/material/styles'

const list: Theme['components'] = {
  MuiListItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        gap: theme.spacing(4)
      }),
      padding: ({ theme, ownerState }) => ({
        ...(!ownerState.dense && {})
      })
    }
  },
  MuiListItemAvatar: {
    styleOverrides: {
      root: {}
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {}
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({})
    }
  },
  MuiListItemText: {
    styleOverrides: {
      root: {},
      primary: {}
    }
  },
  MuiListSubheader: {
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  }
}

export default list
