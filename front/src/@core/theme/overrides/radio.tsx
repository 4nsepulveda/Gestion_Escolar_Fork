// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const IconChecked = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z'
        fill='var(--mui-palette-common-white)'
        stroke='currentColor'
        strokeWidth='5'
      />
    </svg>
  )
}

const UncheckedIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z' stroke='var(--mui-palette-text-secondary)' strokeWidth='2' />
    </svg>
  )
}

const radio: Theme['components'] = {
  MuiRadio: {
    defaultProps: {
      icon: <UncheckedIcon />,
      checkedIcon: <IconChecked />
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({})
    }
  }
}

export default radio
