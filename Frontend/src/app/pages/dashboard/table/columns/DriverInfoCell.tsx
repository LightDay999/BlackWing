/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {Job} from '../../core/_models'

type Props = {
  job: Job
}

const DriverInfoCell: FC<Props> = ({job}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {
          (job.driver?.firstname && job.driver?.lastname
            ? job.driver.firstname + ' ' + job.driver.lastname
            : job.client?.company) + "/" + (job.driver?.driver_license_number ? job.driver.driver_license_number: '') + (job.driver?.vehicle_license_number ? job.driver.vehicle_license_number : '')
        }
      </a>
      {/* <span>{user.email}</span> */}
    </div>
  </div>
)

export {DriverInfoCell}
