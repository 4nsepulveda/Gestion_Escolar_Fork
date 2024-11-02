// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledFooterProps = {
  overrideStyles?: CSSObject
}

const StyledFooter = styled.footer<StyledFooterProps>``

export default StyledFooter
