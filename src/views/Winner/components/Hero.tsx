import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import { TicketPurchaseCard } from '../svgs'
import BuyTicketsButton from './BuyTicketsButton'


const TicketContainer = styled(Flex)`
  
`

const PrizeTotalBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledBuyTicketButton = styled(BuyTicketsButton)<{ disabled: boolean }>`
  background: #FDC02A;
  color: #585858;
  border-radius: 12px;
  width: 200px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 240px;
  }
`

const ButtonWrapper = styled.div`
 
`

const TicketSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
`

const Decorations = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(/images/decorations/loooto.png);
  background-repeat: no-repeat;
  background-position: center ;
  background-size: 100% 100%;
  top: 0;
  left: 0;
`

const Hero = () => {
  const { t } = useTranslation()
  const {
    currentRound: { amountCollectedInCake, status },
    isTransitioning,
  } = useLottery()

  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const getHeroHeading = () => {
    if (status === LotteryStatus.OPEN) {
      return (
        <>
          {prizeInBusd.isNaN() ? (
            <Skeleton my="7px" height={60} width={190} />
          ) : (
            <PrizeTotalBalance fontSize="60px" bold prefix="$" value={prizeTotal} mt="30px" mb="40px" decimals={0} />
          )}
          {/* <Heading mb="32px" scale="lg" color="#ffffff">
            {t('in prizes!')}
          </Heading> */}
        </>
      )
    }
    return (
      <Heading mb="24px" scale="xl" color="#ffffff">
        {t('Tickets on sale soon')}
      </Heading>
    )
  }

  return (
    <Flex className="lottery-banner-text" flexDirection="column" alignItems="center" justifyContent="center">
      <Decorations />
     
       <h3>The Safemoon Lottery <span className="text-primary">prize pool</span></h3>
       {getHeroHeading()}
     
     
      <TicketContainer
        position="relative"
        width={['240px', '288px']}
        alignItems="center"
        justifyContent="center"
      >
        <ButtonWrapper>
          <StyledBuyTicketButton disabled={ticketBuyIsDisabled} />
        </ButtonWrapper>
      
      </TicketContainer>
    </Flex>
  )
}

export default Hero
