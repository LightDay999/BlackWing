import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTIcon} from '../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import DateRangePicker from './DateRangePicker';
import { string } from 'yup'

const JobsListFilter = () => {
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchDriver, setSearchDriver] = useState<string>('')
  const [searchClient, setSearchClient] = useState<string>('')

  const filterData = () => {
    const formatWithLeadingZero = (value: number) => (value < 10 ? `0${value}` : value.toString());
    const start_year = startDate ? startDate.getFullYear().toString() : null;
    const start_month = startDate ? formatWithLeadingZero(startDate.getMonth() + 1) : null;
    const start_day = startDate ? formatWithLeadingZero(startDate.getDate()) : null;

    const end_year = endDate ? endDate.getFullYear().toString() : null;
    const end_month = endDate ? formatWithLeadingZero(endDate.getMonth() + 1) : null;
    const end_day = endDate ? formatWithLeadingZero(endDate.getDate()) : '';

    const enddate = endDate ?  `${end_year}-${end_month}-${end_day}` : null;
    const startdate = startDate ?  `${start_year}-${start_month}-${start_day}` : null;
    updateState({
      
      filter: {startdate,enddate, searchDriver, searchClient},
      ...initialQueryState,
    })
  }

  const resetData = () => {
    updateState({filter: {startDate: null, endDate: null, searchDriver: '', searchClient:''}, ...initialQueryState})
    setStartDate(null);
    setEndDate(null);
    setSearchDriver('');
    setSearchClient('');
  }

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {

    // const formatWithLeadingZero = (value: number) => (value < 10 ? `0${value}` : value.toString());
    // const start_year = startDate ? startDate.getFullYear().toString() : '';
    // const start_month = startDate ? formatWithLeadingZero(startDate.getMonth() + 1) : '';
    // const start_day = startDate ? formatWithLeadingZero(startDate.getDate()) : '';
    
    // `${start_year}-${start_month}-${start_day}` === '--' ? setStartDate(undefined) :   setStartDate(`${start_year}-${start_month}-${start_day}`);
   

    // const end_year = endDate ? endDate.getFullYear().toString() : '';
    // const end_month = endDate ? formatWithLeadingZero(endDate.getMonth() + 1) : '';
    // const end_day = endDate ? formatWithLeadingZero(endDate.getDate()) : '';

    // `${end_year}-${end_month}-${end_day}` === '--' ? setEndDate(undefined) :   setEndDate(`${end_year}-${end_month}-${end_day}`);

  };
  return (
    <div className='card-title'>
      {/* begin::Content */}
      <div className='px-7 py-5' data-kt-user-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate} 
              //onChange={handleDateChange}
             />
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='mb-10'>
            <div className="row g-5 g-xl-8">
              <div className='col-xl-6'>
                <label className='form-label fs-6 fw-bold'>Driver:</label>
                  {/* begin::Search */}
                  <div className='d-flex align-items-center position-relative my-1'>
                    <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                    <input
                      type='text'
                      data-kt-user-table-filter='search'
                      className='form-control form-control-solid w-300px ps-14'
                      placeholder='Search Driver'
                      value={searchDriver}
                      onChange={(e) => setSearchDriver(e.target.value)}
                    />
                  </div>
                  {/* end::Search */}
              </div>
              <div className='col-xl-6'>
                <label className='form-label fs-6 fw-bold'>Client:</label>
                  {/* begin::Search */}
                  <div className='d-flex align-items-center position-relative my-1'>
                    <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                    <input
                      type='text'
                      data-kt-user-table-filter='search'
                      className='form-control form-control-solid w-300px ps-14'
                      placeholder='Search Client'
                      value={searchClient}
                      onChange={(e) => setSearchClient(e.target.value)}
                    />
                  </div>
                  {/* end::Search */}
              </div>
            </div>
          </div>
          {/* end::Input group */}

          {/* begin::Actions */}
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading}
              onClick={resetData}
              className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-kt-menu-dismiss='true'
              data-kt-user-table-filter='reset'
            >
              Reset
            </button>
            <button
              disabled={isLoading}
              type='button'
              onClick={filterData}
              className='btn btn-primary fw-bold px-6'
              data-kt-menu-dismiss='true'
              data-kt-user-table-filter='filter'
            >
              Apply
            </button>
          </div>
          {/* end::Actions */}
      </div>
      {/* end::Content */}
    </div>
  )
}

export {JobsListFilter}
