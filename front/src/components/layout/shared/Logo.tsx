'use client'

// React Imports
import type { CSSProperties } from 'react'

// Third-party Imports
import styled from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

type LogoTextProps = {
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>``

const Logo = ({ color }: { color?: CSSProperties['color'] }) => {
  return (
    <div className=''>
      <LogoText color={color}>{themeConfig.templateName}</LogoText>
    </div>
  )
}

export default Logo
