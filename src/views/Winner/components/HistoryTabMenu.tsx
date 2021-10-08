import React from 'react'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    <div className="swtich-tab">
      <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="md" variant="subtle">
      <ButtonMenuItem>{t('All History')}</ButtonMenuItem>
      <ButtonMenuItem>{t('Your History')}</ButtonMenuItem>
    </ButtonMenu>
    </div>
    
  )
}

export default HistoryTabMenu
