import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export interface TimerProps {
  minutes?: number
  hours?: number
  days?: number
}

const StyledTimerFlex = styled(Flex)<{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const StyledTimerText = styled(Heading)`
  background: #FDC02A;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Wrapper: React.FC<TimerProps> = ({ minutes, hours, days }) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex className="time"  alignItems="flex-end">
      {Boolean(days) && (
        <>
         
            {days}
         {t('d  ')}
        </>
      )}
      {Boolean(hours) && (
        <>
         
            {hours}
          {t('h  ')}
        </>
      )}
      {Boolean(minutes) && (
        <>
        
            {minutes}
          {t('m  ')}
        </>
      )}
    </StyledTimerFlex>
  )
}

export default Wrapper
