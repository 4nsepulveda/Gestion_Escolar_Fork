// MUI Imports
import type { Theme } from '@mui/material/styles'

const chip: Theme['components'] = {
  MuiChip: {
    variants: [
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'success' },
        style: {}
      }
    ],
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...theme.typography.body2,
        fontWeight: theme.typography.fontWeightMedium,

        '& .MuiChip-deleteIcon': {
          ...(ownerState.size === 'small' ? {} : {})
        },
        '& .MuiChip-avatar, & .MuiChip-icon': {
          '& i, & svg': {
            ...(ownerState.size === 'small' ? {} : {})
          },
          ...(ownerState.size === 'small' ? {} : {})
        }
      }),
      label: ({ ownerState, theme }) => ({
        ...(ownerState.size === 'small' ? {} : {})
      }),
      iconMedium: {},
      iconSmall: {}
    }
  }
}

export default chip
