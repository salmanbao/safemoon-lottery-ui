import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'
import TwitterIcon from '../../../assets/images/twitter.svg'
import TelegramIcon from '../../../assets/images/telegram.svg'

const Wrapper = styled(Flex)`
.footer-wrapper{
  .footer-links{
    .link{
      color: #fff;
    }
  }
}
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
    <Wrapper>
        <Flex className="footer-wrapper" flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="space-between" width="100%" height="100%">
          <Flex className="footer-links" flexDirection={['column', null, null, 'row']} alignItems="center" justifyContent="space-between" width="100%" height="100%">
            <Text mb={['60px',null,null,'0']} mt={['40px',null,null,'0']}><a className="link" href="/">Home</a></Text>
            <Text mb={['60px',null,null,'0']}><a className="link" href="/lottery">Lottery</a></Text>
            <Text mb={['60px',null,null,'0']}><a className="link" href="/winners">Winners</a></Text>
            {/* <Text mb={['60px',null,null,'0']}><a className="link" href="/faq">FAQ</a></Text> */}
          </Flex>
          
          <div className="social-links">
          <ul>
            <li>
              <a href="/">
              <img src={TwitterIcon} alt="" className="icon" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={TelegramIcon} alt="" className="icon" />
              </a>
            </li>
          </ul>
          </div>
          
        </Flex>
      </Wrapper>
      {/* <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      <FloatingPancakesWrapper>
        <TopLeftImgWrapper>
          <CompositeImage {...topLeftImage} maxHeight="256px" />
        </TopLeftImgWrapper>
        <BottomRightImgWrapper>
          <CompositeImage {...bottomRightImage} maxHeight="256px" />
        </BottomRightImgWrapper>
      </FloatingPancakesWrapper>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Start in seconds.')}
        </Heading>
        <Text textAlign="center" color="white">
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text mb="24px" bold color="white">
          {t('No registration needed.')}
        </Text>

        <Link external href="https://docs.pancakeswap.finance/">
          {t('Learn how to start')}
        </Link>
        {!account && <ConnectWalletButton mt="24px" />}
      </Wrapper> */}
    </>
  )
}

export default Footer
