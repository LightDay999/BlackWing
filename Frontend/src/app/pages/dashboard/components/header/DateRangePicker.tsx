import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { KTIcon} from '../../../../../_metronic/helpers'
import 'react-datepicker/dist/react-datepicker.css';
import enGB from 'date-fns/locale/en-GB'; // Choose your locale

registerLocale('en-GB', enGB); // Register the locale

interface DateRangePickerProps {
    startDate: Date | null,
    endDate: Date | null,
    setStartDate: (date : Date | null) => void,
    setEndDate: (date : Date | null) => void,
    // onChange: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
    const { startDate, endDate, setStartDate, setEndDate} = props;
    const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    // onChange(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    // onChange(startDate, date);
  };

  return (
    <div className="row g-5 g-xl-8">
         <div className='col-xl-6'>
            <div className='d-flex align-items-center position-relative my-1'>
            <label className='form-label fs-6 fw-bold'>Start: </label>
           
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    locale="en-GB"
                    className='form-control form-control-solid w-250px'
                    dateFormat="yyyy-MM-dd"
                />
            </div>
        </div>
         <div className='col-xl-6'>
            <div className='d-flex align-items-center position-relative my-1'>
            <label className='form-label fs-6 fw-bold'>End: </label>
                <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsEnd
                    locale="en-GB"
                    minDate={startDate}
                    className='form-control form-control-solid w-250px'
                    dateFormat="yyyy-MM-dd"
                />
            </div>
         </div>
    </div>
       
  );
};

export default DateRangePicker;
