// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconStyles = (size?: string) => ({
  '& > *:nth-of-type(1)': {
    ...(size === 'small'
      ? {
          fontSize: '14px'
        }
      : {
          ...(size === 'medium'
            ? {
                fontSize: '16px'
              }
            : {
                fontSize: '20px'
              })
        })
  }
})

const button: Theme['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === 'text'
          ? {
              ...(ownerState.size === 'small' && {}),
              ...(ownerState.size === 'medium' && {}),
              ...(ownerState.size === 'large' && {})
            }
          : {
              ...(ownerState.variant === 'outlined'
                ? {
                    ...(ownerState.size === 'small' && {}),
                    ...(ownerState.size === 'medium' && {}),
                    ...(ownerState.size === 'large' && {})
                  }
                : {
                    ...(ownerState.size === 'small' && {}),
                    ...(ownerState.size === 'medium' && {}),
                    ...(ownerState.size === 'large' && {})
                  })
            })
      }),
      contained: ({ ownerState }) => ({}),
      sizeSmall: ({ theme }) => ({}),
      sizeLarge: {},
      startIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {}
          : {
              ...(ownerState.size === 'medium' ? {} : {})
            }),
        ...iconStyles(ownerState.size)
      }),
      endIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineStart: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium' ? {} : {})
            }),
        ...iconStyles(ownerState.size)
      })
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
        props: { variant: 'text', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'text', color: 'success' },
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
        props: { variant: 'outlined', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {}
      }
    ]
  }
}

export default button
