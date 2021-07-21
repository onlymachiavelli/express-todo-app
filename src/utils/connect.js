import Mongoose from "mongoose"

const Connect = async () => {
    const uri = process.env.MONGO_URI
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
    await Mongoose.connect(uri, options)
        .then(() => console.log('Connected to Database'))
        .catch(console.error)
}

export default Connect