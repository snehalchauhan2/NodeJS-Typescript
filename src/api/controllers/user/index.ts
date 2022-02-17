import * as service from '../../../db/services/UserService'
import {CreateUserDTO, UpdateUserDTO} from '../../dto/user.dto'
import {User} from '../../interfaces'
import * as mapper from './mapper'

export const create = async (payload: CreateUserDTO): Promise<User> => {
    return mapper.toUser(await service.create(payload))
}

export const update = async (userId: number, phoneNumber: string, payload: UpdateUserDTO): Promise<User> => {
    return mapper.toUser(await service.update(userId, phoneNumber, payload))
}

export const getById = async (userId: number, phoneNumber: string): Promise<User> => {
    return mapper.toUser(await service.getById(userId, phoneNumber))
}

export const deleteById = async (userId: number, phoneNumber: string): Promise<any> => {
    return await service.deleteById(userId, phoneNumber)
}

export const getAll = async (): Promise<User[]> => {
    return (await service.getAll()).map(mapper.toUser)
}