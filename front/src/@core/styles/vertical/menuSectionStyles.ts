// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { MenuProps } from '@menu/vertical-menu'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuSectionStyles = (theme: Theme): MenuProps['menuSectionStyles'] => {
  return {
    root: {
      [`& .${menuClasses.menuSectionContent}`]: {},
      [`& .${menuClasses.menuSectionLabel}`]: {}
    }
  }
}

export default menuSectionStyles
