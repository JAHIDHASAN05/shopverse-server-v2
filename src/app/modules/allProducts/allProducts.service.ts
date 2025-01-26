import { AllProduct } from "./allProducts.model"


const getAllProductsFromDb= async()=>{

    const result= await AllProduct.find()
    return result

}


 export const AllProductService={
    getAllProductsFromDb
}