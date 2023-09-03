// @ts-nocheck
import {Column} from 'react-table'
import {JobStandardCell} from './JobStandardCell'
import {JobActionsCell} from './JobActionsCell'
import {JobSelectionCell} from './JobSelectionCell'
import {JobCustomHeader} from './JobCustomHeader'
import {JobSelectionHeader} from './JobSelectionHeader'
import { ClientInfoCell } from './ClientInfoCell'
import { DriverInfoCell } from './DriverInfoCell'
import {Job} from '../../core/_models'

const jobsColumns: ReadonlyArray<Column<Job>> = [
  {
    Header: (props) => <JobSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <JobSelectionCell id={props.data[props.row.index]._id} />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Driver Invoice' className='min-w-125px' />
    ),
    accessor: 'driver_inv_no',
    // id: 'driver_inv_no',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='driver_inv_no' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Client Invoice' className='min-w-125px' />
    ),
    accessor: 'client_inv_no',
    // id: 'client_inv_no',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='client_inv_no' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Job Ref' className='min-w-125px' />
    ),
    accessor: 'job_ref_no',
    // id: 'job_ref_no',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='job_ref_no' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    accessor: 'createdAt',
    // id: 'date',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='date' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Job Type' className='min-w-125px' />
    ),
    id: 'job_type',
    Cell: ({...props}) => <JobStandardCell job={props.data[props.row.index]} fieldkey='job_type' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Pickup Location' className='min-w-125px' />
    ),
    // id: 'pickup_location',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='pickup_location' />,
    accessor: 'pickup_location',
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Destination Location' className='min-w-125px' />
    ),
    // id: 'dest_location',
    // Cell: ({...props}) => <JobStandardCell user={props.data[props.row.index]} fieldkey='dest_location' />,
    accessor: 'dest_location',
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Client' className='min-w-125px' />
    ),
    id: 'client',
    Cell: ({...props}) => <ClientInfoCell job={props.data[props.row.index]}/>,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Driver' className='min-w-125px' />
    ),
    id: 'driver',
    Cell: ({...props}) => <DriverInfoCell job={props.data[props.row.index]}/>,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Invoice Amount' className='min-w-125px' />
    ),
    id: 'inv_ammount',
    Cell: ({...props}) => <JobStandardCell job={props.data[props.row.index]} fieldkey='inv_ammount' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Amount Paid' className='min-w-125px' />
    ),
    id: 'ammount_paid',
    Cell: ({...props}) => <JobStandardCell job={props.data[props.row.index]} fieldkey='ammount_paid' />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Additional Notes' className='min-w-125px' />
    ),
    accessor: 'add_notes',
  },  
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <JobActionsCell id={props.data[props.row.index].id} />,
  },
]

export {jobsColumns}
