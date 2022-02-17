import {User} from '../../../src/db/models'
import * as userDal from '../../../src/db/dal/user'

const dbTeardown = async () => {
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
    await User.truncate({force: true})
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
}

describe('User DAL', () => {
    let userId: number
    let phoneNumber: string
    beforeAll(async () => {
        await dbTeardown()

        ;({id: userId} = await User.create({
            userId: 1,
            phoneNumber: '1',
        }))
    })

    afterAll(async () => {
        await dbTeardown()
    })

    describe('Create method', () => {
        it('should create and return an object of user details', async () => {
            const user = await userDal.create({
                userId: 1,
                phoneNumber: '1',
            })

            expect(user).not.toBeNull()
        })
    })

    describe('Update method', () => {
        it('should update a specific existing user entry', async () => {
            const userId = 1
            const phoneNumber = '1'
            const user = await userDal.update(userId,phoneNumber, {
                userId: 1,
                phoneNumber: '1'
            })

            expect(user?.id).toEqual(1)
        })
    })
})