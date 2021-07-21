import TaskService from '../services/task'

const Get = async (req, res) => {
    const id = req.params.id
    const task = await TaskService.getTaskById(id)
    return res.json(task)
}

const GetAll = async (req, res) => {
    const tasks = await TaskService.getAllTasks()
    return res.json(tasks)
}

const Create = async (req, res) => {
    const data = req.body
    const id = await TaskService.addTask(data)
    return res.json(id)
}

const Put = async (req, res) => {
    const id = req.params.id
    const data = req.body
    await TaskService.updateTask(id, data)
    return res.status(201).end()
}


const Delete = async (req, res) => {
    const id = req.params.id
    await TaskService.deleteTask(id)
    return res.status(201).end()
}

export default {
    Get, GetAll, Create, Put, Delete
}