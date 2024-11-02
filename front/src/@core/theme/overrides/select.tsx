// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const SelectIcon = () => {
  return <i className='ri-arrow-down-s-line' />
}

const iconStyles = (theme: Theme) => ({})

const select: Theme['components'] = {
  MuiSelect: {
    defaultProps: {
      IconComponent: SelectIcon
    },
    styleOverrides: {
      select: ({ theme, ownerState }) => ({
        ...(ownerState.variant === 'outlined' && {}),
        '&[aria-expanded="true"] ~ i, &[aria-expanded="true"] ~ svg': {},
        '& ~ i, & ~ svg': iconStyles(theme as Theme),
        '&.MuiInputBase-inputSizeSmall': {
          '& ~ i, & ~ svg': {}
        },
        '&:not(aria-label="Without label") ~ .MuiOutlinedInput-notchedOutline > legend > span': {}
      })
    }
  },
  MuiNativeSelect: {
    styleOverrides: {
      select: ({ theme }) => ({
        '& + i, & + svg': iconStyles(theme as Theme)
      })
    }
  }
}

export default select
