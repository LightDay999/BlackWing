
import {ID, Response} from '../../../../_metronic/helpers'
export type UserAddress = {
  addressLine?: string
  city?: string
  state?: string
  postCode?: string
}
export type User = {
  _id?: ID
  id?: ID
  name?:string
  firstname?: string
  lastname?: string
  fullname?: string
  shortname?: string
  address?: string
  mobile?: string
  is_delete?: number
  password?: string
  avatar?: string
  email?: string
  position?: string
  role?: number
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  company?: string;
  car_type?: string;
  driver_type?: number;// 0: personal, 1: operator
  driver_license_number?: string;
  vehicle_license_number?: string;
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 0,
  name: '',
  email: '',
}
