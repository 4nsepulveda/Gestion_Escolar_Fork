// MUI Imports
import { lighten } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { MenuItemStyles } from '@menu/types'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuItemStyles = (theme: Theme): MenuItemStyles => {
  return {
    root: {},
    button: ({ active }) => ({}),
    icon: ({ level }) => ({}),
    prefix: {},
    suffix: {},
    subMenuExpandIcon: {},
    subMenuContent: {}
  }
}

export default menuItemStyles
