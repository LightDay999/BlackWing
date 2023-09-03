import {FC} from 'react'
import { Job } from '../../core/_models'
type Props = {
    job: Job,
    fieldkey: string
}

const JobStandardCell: FC<Props> = ({ job, fieldkey }) => {
    let content: any;
    
    switch(fieldkey) {
        case 'job_type':
            content = job.job_type;
        break;
        case 'inv_ammount':
            content = job.inv_ammount;
        break;
        case 'ammount_paid':
            content = job.ammount_paid;
        break;
        default:
            break;

    }

    return (
      <div className='badge badge-light fw-bolder'>
        {content}
      </div>
    );
  };

export {JobStandardCell}
