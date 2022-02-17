import {User} from '../../interfaces'
import {UserOutput} from '../../../db/models/User'

export const toUser = (user: UserOutput): User => {
    if(user.id) {
        return {
            id: user.id,
            userId: user.userId,
            phoneNumber: user.phoneNumber,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }else{
        return user
    }
}