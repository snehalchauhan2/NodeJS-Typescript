import {User} from '../models'
import {UserInput, UserOutput} from '../models/User'

export const create = async (payload: UserInput): Promise<UserOutput | any> => {
    return await User.create(payload).then((user)=>{
        return user
    }).catch((error)=>{
        if(error.name === 'SequelizeUniqueConstraintError'){
            return { error:'UserId already exists' }
        }else{
            return { error: 'Something went wrong' }
        }
    })
}

export const update = async (userId: number, phoneNumber: string, payload: Partial<UserInput>): Promise<UserOutput | any> => {
    const user = await User.findOne({
        where: { userId, phoneNumber },
    })

    if (!user) {
        // @todo throw custom error
        return {error:'User not found'};
    }

    return await user.update(payload).then((user)=>{
        return user
    }).catch((error)=>{
        if(error.name === 'SequelizeUniqueConstraintError'){
            return { error:'UserId already exists' }
        }else{
            return { error: 'Something went wrong' }
        }
    })
}

export const getById = async (userId: number, phoneNumber: string): Promise<UserOutput | any> => {
    const user = await User.findOne({
        where: { userId, phoneNumber },
    })

    if (!user) {
        // @todo throw custom error
        return {error:'User not found'};
    }

    return user
}

export const deleteById = async (userId: number, phoneNumber: string): Promise<any> => {
    const deletedCount = await User.destroy({
        where: { userId, phoneNumber },
    })

    if (deletedCount) {
        return {error:'User deleted'};
    }else{
        return {error:'User not found'};
    }
}

export const getAll = async (): Promise<UserOutput[]> => {
    return User.findAll()
}