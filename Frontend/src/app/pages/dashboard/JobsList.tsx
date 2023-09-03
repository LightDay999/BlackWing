import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import { JobsListHeader } from './components/header/JobsListHeader'
import { JobsTable } from './table/JobsTable'
//import {UsersTable} from './table/UsersTable'
//import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../_metronic/helpers'

const JobsList = () => {
    const {itemIdForUpdate} = useListView()
    return (
      <>
        <KTCard>
          <JobsListHeader />
          <JobsTable/>
        </KTCard>
        {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
      </>
    )
  }

  export {JobsList}