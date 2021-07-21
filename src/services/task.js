import Tasks from '../models/task'

const getAllTasks = () => Tasks.find({}).lean()

const getTaskById = id => Tasks.findById(id).lean()

const updateTask = (id, data) => Tasks.findByIdAndUpdate(id, data)

const deleteTask = id => Tasks.findByIdAndDelete(id)

const addTask = data => Tasks.create(data)

export default {
    getAllTasks,
    getTaskById,
    updateTask,
    addTask,
    deleteTask
}