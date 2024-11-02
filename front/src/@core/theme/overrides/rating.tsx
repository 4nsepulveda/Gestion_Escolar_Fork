// MUI Imports
import type { Theme } from '@mui/material/styles'

const rating: Theme['components'] = {
  MuiRating: {
    defaultProps: {
      emptyIcon: <i />,
      icon: <i />
    },
    styleOverrides: {
      root: {},
      sizeSmall: {},
      sizeLarge: {}
    }
  }
}

export default rating
