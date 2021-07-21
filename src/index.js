import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import TaskRoute from './routes/tasks'
import Connect from './utils/connect' 

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(json())


// ROUTES
app.use('/task', TaskRoute)



Connect().then(() => app.listen(5069, () => console.log('Server is Running'))).catch(console.error)

