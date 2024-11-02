// MUI Imports
import type { Theme } from '@mui/material/styles'

const fab: Theme['components'] = {
  MuiFab: {
    variants: [
      {
        props: { color: 'default' },
        style: {}
      },
      {
        props: { color: 'primary' },
        style: {}
      },
      {
        props: { color: 'secondary' },
        style: {}
      },
      {
        props: { color: 'error' },
        style: {}
      },
      {
        props: { color: 'warning' },
        style: {}
      },
      {
        props: { color: 'info' },
        style: {}
      },
      {
        props: { color: 'success' },
        style: {}
      }
    ]
  }
}

export default fab
