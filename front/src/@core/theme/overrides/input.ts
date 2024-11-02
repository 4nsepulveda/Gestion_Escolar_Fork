// MUI Imports
import type { Theme } from '@mui/material/styles'

const input: Theme['components'] = {
  MuiFormControl: {
    styleOverrides: {
      root: {}
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {}
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {}
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      shrink: ({ ownerState }) => ({
        ...(ownerState.variant === 'outlined' && {}),
        ...(ownerState.variant === 'filled' && {}),
        ...(ownerState.variant === 'standard' && {})
      })
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {},
      input: ({ theme, ownerState }) => ({
        ...(ownerState?.size === 'medium' && {
          '&:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {}
        }),
        '& ~ .MuiOutlinedInput-notchedOutline': {}
      }),
      notchedOutline: {}
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {}
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {}
    }
  }
}

export default input
