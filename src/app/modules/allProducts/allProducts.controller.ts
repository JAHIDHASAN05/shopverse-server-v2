import { Request, Response } from "express"; 
import { AllProductService } from "./allProducts.service";

const getAllProducts = async (req: Request, res: Response) => {
    try {

        console.log('wrokign all poroud');
        const result = await AllProductService.getAllProductsFromDb(); 
        res.status(200).json({
            success: true,
            message: "All products retrieved successfully",
            data: result,
        });
    } catch (err) {     
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving products",
            error: err instanceof Error ? err.message : "something went error",
        });
    }
};


export const AllProductController = {
    getAllProducts,
};
