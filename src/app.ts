import express, { Request, Response } from 'express'
import cors from 'cors'
import { UserRoute } from './app/modules/users/user.route'
const app = express()
const port = 3000

// middleware
app.use(express.json())
app.use(cors())

// application routers
app.use('/api/users', UserRoute);
// app.use('/api/users', UserRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


export default app;
