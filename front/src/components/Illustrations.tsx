'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

type ImageObj = {
  src: string
  alt?: string
  className?: string
  height?: number
  width?: number
}

type IllustrationsProp = {
  image1?: ReactNode | ImageObj
  image2?: ReactNode | ImageObj
  maskImg?: ReactNode | ImageObj
  mode?: Mode
}

// Styled Components
const MaskImg = styled('img')({
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const Illustrations = (props: IllustrationsProp) => {
  // Props
  const { image1, image2, maskImg, mode } = props

  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png'
  const lightImg = '/images/pages/misc-mask-light.png'

  // Hook
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const maskBackground = useImageVariant(mode as Mode, lightImg, darkImg)

  function isImageObj(obj: any): obj is ImageObj {
    return obj && typeof obj === 'object' && 'src' in obj
  }

  if (!hidden) {
    return null
  } else {
    return null
  }
}

export default Illustrations