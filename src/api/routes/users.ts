import { Router, Request, Response} from 'express'

import * as userController from '../controllers/user'
import {CreateUserDTO, UpdateUserDTO} from '../dto/user.dto'

const usersRouter = Router()

usersRouter.get('/:userId/:phoneNumber', async (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const phoneNumber = req.params.phoneNumber

    const result = await userController.getById(userId, phoneNumber)
    return res.status(200).send(result)
})

usersRouter.patch('/:userId/:phoneNumber', async (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const phoneNumber = req.params.phoneNumber
    const payload:UpdateUserDTO = req.body
    
    const result = await userController.update(userId, phoneNumber, payload)
    return res.status(201).send(result)
})

usersRouter.delete('/:userId/:phoneNumber', async (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const phoneNumber = req.params.phoneNumber
    
    const result = await userController.deleteById(userId, phoneNumber)
    return res.status(201).send(result)
})

usersRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateUserDTO = req.body

    const result = await userController.create(payload)
    return res.status(200).send(result)
})

usersRouter.get('/', async (req: Request, res: Response) => {
    const results = await userController.getAll()
    return res.status(200).send(results)
})

export default usersRouter