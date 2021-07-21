import Mongoose from "mongoose"

const Connect = async () => {
    const uri = 'mongodb+srv://dagotdadope:donda@cluster0.e9p5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
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