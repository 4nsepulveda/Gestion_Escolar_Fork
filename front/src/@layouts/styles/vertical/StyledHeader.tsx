// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledHeaderProps = {
  overrideStyles?: CSSObject
}

const StyledHeader = styled.header<StyledHeaderProps>``

export default StyledHeader
