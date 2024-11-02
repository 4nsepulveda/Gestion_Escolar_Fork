// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { SystemMode } from '@core/types'

const shadows = (mode: SystemMode): Theme['shadows'] => {
  const color = `var(--mui-mainColorChannels-${mode}Shadow)`

  return ['none', ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``]
}

export default shadows
