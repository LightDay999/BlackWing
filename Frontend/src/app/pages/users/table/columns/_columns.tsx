// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserStandardCell} from './UserStandardCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Name' className='min-w-125px' />
    ),
    id: 'fullname',
    Cell: ({...props}) => <UserStandardCell user={props.data[props.row.index]} fieldkey='fullname' />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Short name' className='min-w-125px' />
    ),
    id: 'shortname',
    Cell: ({...props}) => <UserStandardCell user={props.data[props.row.index]} fieldkey='shortname' />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Email' className='min-w-125px' />
    ),
    id: 'email',
    Cell: ({...props}) => <UserStandardCell user={props.data[props.row.index]} fieldkey='email' />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-125px' />
    ),
    id: 'address',
    Cell: ({...props}) => <UserStandardCell user={props.data[props.row.index]} fieldkey='address' />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Mobile' className='min-w-125px' />
    ),
    id: 'mobile',
    Cell: ({...props}) => <UserStandardCell user={props.data[props.row.index]} fieldkey='mobile' />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
 
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
