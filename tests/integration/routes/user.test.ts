import User, {UserOutput} from "../../../src/db/models/User"
import {request} from "../../helpers"

const dbTeardown = async () => {
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
    // await User.destroy({ cascade: true, truncate: true, force: true });
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
}

describe('User routes', () => {
    let userId: number
    let phoneNumber: string
    let user: UserOutput

    beforeAll(async () => {
        [user] = await Promise.all([
            User.create({userId: 1, phoneNumber: '1'}),
            User.create({userId: 2, phoneNumber: '2'}),
        ])

        ;({userId: userId, phoneNumber: phoneNumber} = user)
    })

    afterAll(async () => {
        await dbTeardown()
    })

    describe('Get All', () => {
        it('should return an array of existing users', async () => {
            const {body: data} = await request.get('/api/v1/users').expect(200)
            expect(data?.length).toEqual(2)
        })
    })

    describe('Get single user', () => {
        it('should return a single user with specified', async () => {
            const {body: data} = await request.get(`/api/v1/users/${userId}/${phoneNumber}`).expect(200)
            expect(data.userId).toEqual(userId)
        })
    })
})