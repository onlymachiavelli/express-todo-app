import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
})

export default Mongoose.models.Task || Mongoose.model('Task', schema)