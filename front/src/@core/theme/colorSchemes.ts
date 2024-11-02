// MUI Imports
import type { Theme } from '@mui/material/styles'

const colorSchemes = (): Theme['colorSchemes'] => {
  const skin = 'default' as string

  return {
    light: {
      palette: {}
    },
    dark: {
      palette: {}
    }
  } as Theme['colorSchemes']
}

export default colorSchemes
