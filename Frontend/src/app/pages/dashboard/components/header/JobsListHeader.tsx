import {useListView} from '../../core/ListViewProvider'
import {JobsListToolbar} from './JobsListToolbar'
import {JobsListGrouping} from './JobsListGrouping'
import { JobsListFilter } from './JobsListFilter'

const JobsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <JobsListFilter/>
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <JobsListGrouping /> : <JobsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {JobsListHeader}
