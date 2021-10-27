import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'
import lotterIcon from '../../assets/images/ticket-alt.svg'
import AwardIcon from '../../assets/images/award.svg'
import lotterIconActive from '../../assets/images/ticket-alt-color.svg'
import AwardIconActive from '../../assets/images/award-color.svg'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <div className="main-wrapper">
      <UikitMenu
        userMenu={<UserMenu />}
        globalMenu={<GlobalSettings />}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePriceUsd.toNumber()}
        links={config(t)}
        subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={footerLinks(t)}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        buyCakeLabel={t('Buy CAKE')}
        {...props}
      />
      <div className="main-menu">
        <div className="logo">
          <a href="/">
            <span className="text-color">Space</span>pies
          </a>
        </div>
        <ul>
          <li>
            <a href="/lottery" className="">
              {' '}
              <img src={lotterIcon} alt="" className="menu-icon" />
              <img src={lotterIconActive} alt="" className="menu-icon active" style={{ display: 'none' }} /> Lottery
            </a>
          </li>
          <li>
            <a href="/winner">
              <img src={AwardIcon} alt="" className="menu-icon" />
              <img src={AwardIconActive} alt="" className="menu-icon active" style={{ display: 'none' }} /> Winners
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
