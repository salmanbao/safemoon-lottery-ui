import React from 'react'
import styled from 'styled-components'
import { Flex , Text} from '@pancakeswap/uikit'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import Row from 'components/Layout/Row'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import PancakeSquadBanner from './components/Banners/PancakeSquadBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  padding-bottom: 0;
  > div{
    padding-bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const BannerBottom = styled.div`
  background-color: #454545;
  padding: 30px 0;
  .text{
    color: #fff;
    font-size: 24px;
  }
  @media screen and (max-width: 851px){
    display:none;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1280px' }
  const FooterContainerStyles = { margin: '0', width: '100%', maxWidth: '1280px' }

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {/* {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        {/* <Flex
          pt={[account ? '220px' : '0', null, null, account ? '76px' : '0']}
          mt={[account ? '0' : '-16px', null, null, account ? '0' : '-48px']}
          pb="24px"
        >
          <PancakeSquadBanner />
        </Flex> */}
        <Hero />
      </StyledHeroSection>
      <BannerBottom>
        <Container width="100%">
          
          <Flex alignItems="center" justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
            <Text className="text">70% Prize Pool</Text>
            <Text className="text">25% Burn Wallet</Text>
            <Text className="text">5% Funding Wallet</Text>
          </Flex>
        </Container>
      </BannerBottom>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <SalesSection {...swapSectionData} />
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
        <FarmsPoolsRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
        <CakeDataRow />
      </PageSection> */}
      <PageSection className="footer-section"
        innerProps={{ style: FooterContainerStyles }}
        background="#434343"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
