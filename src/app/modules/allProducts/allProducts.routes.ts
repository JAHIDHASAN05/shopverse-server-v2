import express from 'express'
import { AllProductController } from './allProducts.controller'



const router= express.Router()

router.get('/', AllProductController.getAllProducts)

export const  AllProductRoutes= router    