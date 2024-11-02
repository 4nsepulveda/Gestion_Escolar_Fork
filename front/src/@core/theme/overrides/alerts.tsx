// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

const alerts: Theme['components'] = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        error: <i className='ri-error-warning-line' />,
        warning: <i className='ri-alert-line' />,
        info: <i className='ri-information-line' />,
        success: <i className='ri-checkbox-circle-line' />
      }
    },
    styleOverrides: {},
    variants: [
      {
        props: { variant: 'standard', severity: 'error' },
        style: {}
      },
      {
        props: { variant: 'standard', severity: 'warning' },
        style: {}
      },
      {
        props: { variant: 'standard', severity: 'info' },
        style: {}
      },
      {
        props: { variant: 'standard', severity: 'success' },
        style: {}
      },
      {
        props: { variant: 'outlined', severity: 'error' },
        style: {}
      },
      {
        props: { variant: 'outlined', severity: 'warning' },
        style: {}
      },
      {
        props: { variant: 'outlined', severity: 'info' },
        style: {}
      },
      {
        props: { variant: 'outlined', severity: 'success' },
        style: {}
      },
      {
        props: { variant: 'filled', severity: 'error' },
        style: {}
      },
      {
        props: { variant: 'filled', severity: 'warning' },
        style: {}
      },
      {
        props: { variant: 'filled', severity: 'info' },
        style: {}
      },
      {
        props: { variant: 'filled', severity: 'success' },
        style: {}
      }
    ]
  },
  MuiAlertTitle: {
    styleOverrides: {}
  }
}

export default alerts
