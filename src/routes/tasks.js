import express from 'express'
import TaskController from '../constrollers/task'
const Route = express.Router()

Route.route('/')
    .get(TaskController.GetAll)
    .post(TaskController.Create)

Route.route('/:id')
    .get(TaskController.Get)
    .put(TaskController.Put)
    .delete(TaskController.Delete)

export default Route