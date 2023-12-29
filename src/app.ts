import express from 'express';
import cors from 'cors';
import { dbConnect } from './database/mongo';
import { router } from './routes';

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.disable('x-powered-by')

app.use('/api/v1', router)

dbConnect().then(() => console.log('Conexion Ready'))


app.listen(PORT, () => {
  console.log(`Puerto corriendo en : http://localhost:${PORT}`)
})

