// MUI Imports
import type { Theme } from '@mui/material/styles'

const pagination: Theme['components'] = {
  MuiPagination: {
    styleOverrides: {
      ul: {
        rowGap: 6
      }
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'standard' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'tonal' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'standard' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {}
      }
    ]
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.size === 'medium' && {}),
        ...(ownerState.shape !== 'rounded' && {}),
        '&.Mui-selected.Mui-disabled': {},
        '&.Mui-disabled': {},
        ...(ownerState.shape === 'rounded' && ownerState.size === 'small' && {}),
        ...(ownerState.shape === 'rounded' && ownerState.size === 'large' && {})
      }),
      sizeSmall: {},
      sizeLarge: {}
    }
  }
}

export default pagination
