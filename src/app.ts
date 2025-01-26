import express, { Request, Response } from 'express'
import cors from 'cors'
import { AllProductRoutes } from './app/modules/allProducts/allProducts.routes'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/all-products', AllProductRoutes)

app.get('/', (req:Request, res:Response)=>{
   res.status(200).json({
    success: true,
    message: 'shopverse server is running '
   })
})


export default app;
