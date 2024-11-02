// MUI Imports
import type { Theme } from '@mui/material/styles'

const slider: Theme['components'] = {
  MuiSlider: {
    styleOverrides: {
      root: ({ ownerState }) => ({}),
      thumb: ({ ownerState }) => ({}),
      rail: ({ ownerState }) => ({}),
      valueLabel: ({ theme, ownerState }) => ({}),
      track: ({ theme, ownerState }) => ({})
    }
  }
}

export default slider
