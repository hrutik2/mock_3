const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{type:String,required:true, minlength: 1, maxlength: 50},
    picture:{type:String,require:true},
    description:String ,
    gender:String,
    category:String,
    price:Number,
    created_at: {type: Date},
    updated_at: {type: Date}
})

const productModel=mongoose.model("product",productSchema)

module.exports={productModel}