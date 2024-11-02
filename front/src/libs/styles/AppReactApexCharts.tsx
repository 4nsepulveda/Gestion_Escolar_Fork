'use client'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party Imports
import type { Props } from 'react-apexcharts'

// Component Imports
import ReactApexcharts from '@/libs/ApexCharts'

type ApexChartWrapperProps = Props & {
  boxProps?: BoxProps
}

// Styled Components
const ApexChartWrapper = styled(Box)<BoxProps>(({ theme }) => ({}))

const AppReactApexCharts = (props: ApexChartWrapperProps) => {
  // Props
  const { boxProps, ...rest } = props

  return (
    <ApexChartWrapper {...boxProps}>
      <ReactApexcharts {...rest} />
    </ApexChartWrapper>
  )
}

export default AppReactApexCharts
