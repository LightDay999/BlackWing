import {FC, lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'

import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import { UsersboardWrapper } from '../pages/users/UsersboardWrapper'
import { BookboardWrapper } from '../pages/bookboard/BookboardWrapper'

import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

import {useAuth} from '../../app/modules/auth'

const PrivateRoutes = () => {
  const {currentUser, logout} = useAuth()
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        {currentUser?.role === 0 && 
          <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        }
        {currentUser?.role === 1 && 
          <Route path='auth/*' element={<Navigate to='/bookboard' />} />
        }
        
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route path='bookboard' element={<BookboardWrapper />} />

        <Route path='users' element={<UsersboardWrapper />} />        
        {/* Lazy Modules */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
