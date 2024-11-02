// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const Icon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z'
        stroke='var(--mui-palette-text-secondary)'
        strokeWidth='2'
      />
    </svg>
  )
}

const IndeterminateIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z' fill='currentColor' />
      <path d='M8.5 11.5h7v1h-7v-1Z' fill='var(--mui-palette-common-white)' />
    </svg>
  )
}

const CheckedIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z' fill='currentColor' />
      <path
        d='m11 13.586 4.596-4.597.707.707L11 15l-3.182-3.182.707-.707L11 13.586Z'
        fill='var(--mui-palette-common-white)'
      />
    </svg>
  )
}

const checkbox: Theme['components'] = {
  MuiCheckbox: {
    defaultProps: {
      icon: <Icon />,
      indeterminateIcon: <IndeterminateIcon />,
      checkedIcon: <CheckedIcon />
    },
    styleOverrides: {}
  }
}

export default checkbox