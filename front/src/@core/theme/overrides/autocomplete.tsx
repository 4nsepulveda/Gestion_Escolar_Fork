// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const autocomplete = (skin: Skin): Theme['components'] => ({
  MuiAutocomplete: {
    defaultProps: {
      ...(skin === 'bordered' && {
        slotProps: {
          paper: {
            variant: 'outlined'
          }
        }
      }),
      ChipProps: {
        size: 'small'
      },
      popupIcon: <i className='ri-arrow-down-s-line' />
    },
    styleOverrides: {}
  }
})

export default autocomplete
