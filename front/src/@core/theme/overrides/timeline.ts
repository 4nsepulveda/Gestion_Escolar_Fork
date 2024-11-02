// MUI Imports
import type { Theme } from '@mui/material/styles'

const timeline: Theme['components'] = {
  MuiTimeline: {
    styleOverrides: {
      root: {}
    }
  },
  MuiTimelineDot: {
    styleOverrides: {},
    variants: [
      {
        props: { variant: 'outlined' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'grey' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'filled', color: 'success' },
        style: {}
      },
      {
        props: { variant: 'tonal' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'grey' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'error' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'warning' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'info' },
        style: {}
      },
      {
        props: { variant: 'tonal', color: 'success' },
        style: {}
      }
    ]
  },
  MuiTimelineConnector: {
    styleOverrides: {}
  },
  MuiTimelineContent: {
    styleOverrides: {}
  }
}

export default timeline
