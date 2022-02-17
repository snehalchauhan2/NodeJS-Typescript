import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    userId: number;
    phoneNumber: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'userId' | 'phoneNumber'>