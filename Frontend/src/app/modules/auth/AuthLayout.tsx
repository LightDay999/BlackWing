/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100 bgi-size-cover bgi-position-center' style={{backgroundImage: `url(${toAbsoluteUrl('/media/auth/bg1.jpg')})`}}>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10 card card-xl-stretch mb-xl-3' >
            <Outlet />
          </div>
          {/* begin::Footer */}
          <div className='d-flex flex-center flex-wrap px-5'>
            {/* begin::Links */}
            <div className='d-flex fw-semibold text-primary fs-base'>
              <a href='#' className='px-5' target='_blank'>
                Terms
              </a>

              <a href='#' className='px-5' target='_blank'>
                Plans
              </a>

              <a href='#' className='px-5' target='_blank'>
                Contact Us
              </a>
            </div>
            {/* end::Links */}
          </div>
          {/* end::Footer */}
          {/* end::Wrapper */}
       
        </div>
        {/* end::Form */}

      
      </div>
      {/* end::Body */}

    
    </div>
  )
}

export {AuthLayout}
