import { model, Schema } from "mongoose";

const allProductSchema= new Schema<TAllProducts>({
    id:{type: String },
    photoUrl: {type: String , required: true},
    name: {type: String , required: true},
    price : {type: String , required: true},
    catagoryId: {type:String , required: true},
    status:{type:String, enum :['stock-out', 'available'], default:' available'}
})

export const AllProduct = model<TAllProducts>('allProduct', allProductSchema)