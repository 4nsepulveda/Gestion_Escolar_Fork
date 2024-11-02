// MUI Imports
import type { Theme } from '@mui/material/styles'

// Util Imports
import { menuClasses, verticalNavClasses } from '@menu/utils/menuClasses'

const navigationCustomStyles = (theme: Theme) => {
  return {
    color: 'var(--mui-palette-text-primary)',
    zIndex: 'var(--drawer-z-index) !important',
    [`& .${verticalNavClasses.bgColorContainer}`]: {},
    [`& .${verticalNavClasses.header}`]: {},
    [`& .${verticalNavClasses.container}`]: {
      [`& .${verticalNavClasses.toggled}`]: {}
    },
    [`& .${menuClasses.root}`]: {},
    [`& .${verticalNavClasses.backdrop}`]: {}
  }
}

export default navigationCustomStyles
