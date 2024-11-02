// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const accordion = (skin: Skin): Theme['components'] => ({
  MuiAccordion: {
    defaultProps: {
      ...(skin === 'bordered' && {
        variant: 'outlined'
      })
    },
    styleOverrides: {
      root: ({ theme }) => ({})
    }
  },
  MuiAccordionSummary: {
    defaultProps: {
      expandIcon: <i className='ri-arrow-down-s-line' />
    },
    styleOverrides: {
      root: ({ theme }) => ({}),
      content: {},
      expandIconWrapper: {}
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {}
  }
})

export default accordion
