/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'

import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        title='Home'
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
     
     <AsideMenuItem
        to='/users'
        title='Users'
        fontIcon='bi-taxi-front-fill fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.USERS'})}
        className='py-2'
      />

    </>
  )
}
