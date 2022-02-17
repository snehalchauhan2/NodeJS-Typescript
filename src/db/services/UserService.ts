import * as userDal from '../dal/user'
import {UserInput, UserOutput} from '../models/User'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return userDal.create(payload)
}

export const update = async (userId: number, phoneNumber: string, payload: Partial<UserInput>): Promise<UserOutput> => {
    return userDal.update(userId, phoneNumber, payload)
}

export const getById = (userId: number, phoneNumber: string): Promise<UserOutput> => {
    return userDal.getById(userId, phoneNumber)
}

export const deleteById = (userId: number, phoneNumber: string): Promise<any> => {
    return userDal.deleteById(userId, phoneNumber)
}

export const getAll = (): Promise<UserOutput[]> => {
    return userDal.getAll()
}