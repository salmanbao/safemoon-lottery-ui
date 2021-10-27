import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'
import Step1 from '../../../../assets/images/Buy.png'
import Step2 from '../../../../assets/images/wait.png'
import Step3 from '../../../../assets/images/Win.png'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex className="how-to-play" justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      <Heading className="section-heading" fontWeight="300" textAlign="center" color="white" scale="xl">
        {t('How to Play.')}
      </Heading>
      <div className="heading-descr">
        <p>
          If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize
          pool. Simple!
        </p>
        <p>
          If you <span className="text-color">buy multiple</span> lottery tickets you get a discount.
        </p>
      </div>
      {/* <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{data ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex> */}

      {/* <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text> */}

      <Flex className="steps-wrapper" flexDirection={['column', null, null, 'row']}>
        <Flex className="step" flexDirection="column">
          <div className="number">Step 1</div>
          <div className="image">
            <img src={Step1} alt="Buy" />
          </div>
          <h3>Buy TICKETS</h3>
          <p>Prices are set when the round starts, equal to 5 USD in SAFEMOON per ticket.</p>
        </Flex>
        <Flex className="step" flexDirection="column">
          <div className="number">Step 2</div>
          <div className="image">
            <img src={Step1} alt="Wait" />
          </div>
          <h3>Wait for the draw</h3>
          <p>There are two draws every day: one every 12 hours.</p>
        </Flex>
        <Flex className="step" flexDirection="column">
          <div className="number">Step 3</div>
          <div className="image">
            <img src={Step1} alt="Win" />
          </div>
          <h3>Check for prizes</h3>
          <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
        </Flex>
        {/* <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Buy TICKETS')}
            bodyText={t('Prices are set when the round starts, equal to 5 USD in SAFEMOON per ticket.')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Wait for the draw')}
            bodyText={t('There are two draws every day: one every 12 hours.')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Check for prizes')}
            bodyText={t('Once the round’s over, come back to the page and check to see if you’ve won!')}
            highlightColor={theme.colors.failure}
          />
        </IconCard> */}
      </Flex>
      <Flex className="multiple-tickets" flexDirection="column">
        <Text className="title">Buy multiple tickets </Text>
        <p>Increase the odds! Buying multiple tickets in a single transaction will give you a discount.</p>
        <ul>
          <li>20 tickets: 1% </li>
          <li>50 tickets: 4%</li>
          <li>100 tickets: 10%</li>
        </ul>
      </Flex>
    </Flex>
  )
}

export default Stats
