import React from 'react'
import { Flex, Text, Button, Link, Heading } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'
import Wining from '../../../../assets/images/wining.svg'
import Gold from '../../../../assets/images/gold.png'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <>
      <Flex className="winning-section" flexDirection="column">
        <Heading className="section-heading" fontWeight="300" textAlign="center" color="white" scale="xl">
          {t('Winning criteria')}
        </Heading>
        <Flex
          mt='50px'
          flexDirection={['column', null, null, reverse ? 'row-reverse' : 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
        >
          <Flex width='100%'
            flexDirection="column"
            ml={[null, null, null, reverse && '0']}
            mr={[null, null, null, !reverse && '0']}
            alignSelf={['flex-start', null, null, 'center']}
          >
            {/* <PurpleWordHeading text={headingTranslatedText} /> */}
            <Text color="white" mb="24px">
              <p>The digits on your ticket must <span className="text-color">match in the correct</span> order to win.<br /><br />

                Here’s an example lottery draw, with two tickets, A and B.<br /><br />

                <span className="text-color">Ticket A:</span> The first 3 digits and the last 2 digits match, but the 4th digit is
                wrong, so this ticket only wins a “Match first 3” prize.<br /><br />

                <span className="text-color">Ticket B:</span> Even though the last 5 digits match, the first digit is wrong,
                so this ticket doesn’t win a prize.<br /><br />

                Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only
                win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.
              </p>
            </Text>
          </Flex>
          <Flex width='100%' pl='40px' justifyContent={['center', null, null, 'end']} mt={['50px', null, null, null]}>
            {/* <CompositeImage {...images} /> */}
            <div className="Image">
              <img src={Wining} alt="Wining" />
            </div>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="prize-section" mt='50px' flexDirection="column">
        <Heading className="section-heading text-color" fontWeight="300" textAlign="left" scale="xl">
          {t('Prize funds')}
        </Heading>
        <Flex
          mt='20px'
          flexDirection={['column', null, null, reverse ? 'row-reverse' : 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
        >
          <Flex width='100%'
            flexDirection="column"
            ml={[null, null, null, reverse && '0']}
            mr={[null, null, null, !reverse && '0']}
            alignSelf={['flex-start', null, null, 'center']}
          >
            {/* <PurpleWordHeading text={headingTranslatedText} /> */}
            <Text color="white" mb="24px">
              <Flex width='100%' flexDirection="column">
                <Flex mb="15px" className="title" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex className="text-color">Digits matched</Flex>
                  <Flex className="text-color">Prize Pool Allocation</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches first 1</Flex>
                  <Flex>2%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches first 2</Flex>
                  <Flex>3%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches first 3</Flex>
                  <Flex>5%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches first 4</Flex>
                  <Flex>10%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches first 5</Flex>
                  <Flex>15%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Matches all 6</Flex>
                  <Flex>35%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Burn Pool</Flex>
                  <Flex>25%</Flex>
                </Flex>
                <Flex mb="15px" width='100%' flexDirection="row" justifyContent="space-between">
                  <Flex>Funding Pool</Flex>
                  <Flex>5%</Flex>
                </Flex>
              </Flex>
            </Text>

          </Flex>
          <Flex width='100%' pl='40px' justifyContent={['center', null, null, 'end']} mt={['50px', null, null, null]}>
            {/* <CompositeImage {...images} /> */}
            <div className="Image">
              <img src={Gold} alt="Gold" />
            </div>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="footer-top-section" mt='50px' flexDirection="column">
        <Flex
          mt='20px'
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
        >
          <Flex width='100%'
            flexDirection="column"
            ml={[null, null, null, reverse && '0']}
            mr={[null, null, null, !reverse && '0']}
            alignSelf={['flex-start', null, null, 'center']}
          >
            {/* <PurpleWordHeading text={headingTranslatedText} /> */}
            <Text color="white" mb="24px">
              <Flex width='100%' flexDirection="column">
                <Flex mb="30px" width='100%' flexDirection="column" justifyContent="space-between">
                  <Flex mb="20px" className="title text-color">Rollover Prizes</Flex>
                  <Flex className="">After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.</Flex>
                </Flex>
                <Flex mb="30px" width='100%' flexDirection="column" justifyContent="space-between">
                  <Flex mb="20px" className="title text-color">Burn Wallet </Flex>
                  <Flex className="">The Burn Pool will go directly to the OFFICIAL SAFEMOON BURN WALLET address. The more we play, the more we burn!</Flex>
                </Flex>
                <Flex mb="30px" width='100%' flexDirection="column" justifyContent="space-between">
                  <Flex mb="20px" className="title text-color">Funding Wallet </Flex>
                  <Flex className="">The funding wallet will help us maintain, improve and innovate this project as well as new projects that we release for the Safemoon community. We will also be using these funds to support new and innovative projects from within the Safemoon community. Please get in touch with your project/MVP here.</Flex>
                </Flex>


              </Flex>
            </Text>

          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default SalesSection
