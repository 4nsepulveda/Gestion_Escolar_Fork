// MUI Imports
import type { Theme } from '@mui/material/styles'

const typography: Theme['components'] = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }) => ({
        marginBottom: theme.spacing(2)
      })
    },
    variants: [
      {
        props: { variant: 'h1' },
        style: {}
      },
      {
        props: { variant: 'h2' },
        style: {}
      },
      {
        props: { variant: 'h3' },
        style: {}
      },
      {
        props: { variant: 'h4' },
        style: {}
      },
      {
        props: { variant: 'h5' },
        style: {}
      },
      {
        props: { variant: 'h6' },
        style: {}
      },
      {
        props: { variant: 'subtitle1' },
        style: {}
      },
      {
        props: { variant: 'subtitle2' },
        style: {}
      },
      {
        props: { variant: 'body1' },
        style: {}
      },
      {
        props: { variant: 'body2' },
        style: {}
      },
      {
        props: { variant: 'button' },
        style: {}
      },
      {
        props: { variant: 'caption' },
        style: {}
      },
      {
        props: { variant: 'overline' },
        style: {}
      }
    ]
  }
}

export default typography
