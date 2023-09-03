import {FC} from 'react'
import { User } from '../../core/_models'
type Props = {
    user: User,
    fieldkey: string
}

const UserStandardCell: FC<Props> = ({ user, fieldkey }) => {
    let content: any;
    
    switch(fieldkey) {
        case 'fullname':
            content = user.fullname;
        break;
        case 'shortname':
            content = user.shortname;
        break;
        case 'email':
            content = user.email;
        break;
        case 'address':
            content = user.address;
        break;
        case 'mobile':
            content = user.mobile;
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

export {UserStandardCell}
