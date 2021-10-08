import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import Footer from '../Home/components/Footer'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const Winner = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()
  const FooterContainerStyles = { margin: '0', width: '100%', maxWidth: '1280px' }

  return (
    <LotteryPage>
      
      
      <PageSection background={CHECK_PRIZES_BG} hasCurvedDivider={false} index={2}>
        <CheckPrizesSection />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background={isDark ? FINISHED_ROUNDS_BG_DARK : FINISHED_ROUNDS_BG}
        hasCurvedDivider={false}
        index={2}
      >
        <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
          
          <Box mb="50px">
            <HistoryTabMenu
              activeIndex={historyTabMenuIndex}
              setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
            />
          </Box>
          {historyTabMenuIndex === 0 ? (
            <AllHistoryCard />
          ) : (
            <YourHistoryCard
              handleShowMoreClick={handleShowMoreUserRounds}
              numUserRoundsRequested={numUserRoundsRequested}
            />
          )}
        </Flex>
      </PageSection>
      <PageSection className="footer-section"
        innerProps={{ style: FooterContainerStyles }}
        background="#434343"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer/>
      </PageSection>
    </LotteryPage>
  )
}

export default Winner
