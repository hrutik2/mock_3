const express=require("express")
const { productModel } = require("../Models/productModel")
const { Auth } = require("../middleware/aurh")

const productRoutes=express.Router()
productRoutes.use(Auth)
productRoutes.get("/products",async(req,res)=>{
    
    try {
        const products=await productModel.find(req.query)
        res.status(200).send({"product":products})
    } catch (error) {
        res.send(error)
    }
})
productRoutes.get("/products/:id",async(req,res)=>{
     const id=req.params
    try {
        const product=await productModel.find({_id:id.id})
        res.status(200).send({"product":product})
    } catch (error) {
        res.send(error)
    }
})
//add a new product
productRoutes.post('/products', async (req, res) =>{
    const {name,picture,description ,gender,category,price}=req.body
    // created_at: {type: Date},
    // updated_at}
    try {
        const currentDate = new Date()
        const product=new productModel({name,picture,description,gender,category,price,created_at:currentDate,updated_at:currentDate})
        await product.save()
        res.status(201).send({"message":"product added successfully"})
    } catch (error) {
        res.send(error)
    }
})

productRoutes.patch('/products/:id', async (req, res) =>{
    const {id}=req.params
    const {name,picture,description ,gender,category,price}=req.body
    try {
        const currentDate = new Date()

       const upadat=await productModel.findByIdAndUpdate({_id:id},{name,picture,description,gender,category,price,updated_at:currentDate})
       if(!upadat){
         res.status(404).send('product not found')
       }
       else{
        
        res.status(204).send({"message":"product updated successfully"})
       }
    } catch (error) {
        res.send(error)
    }
})
productRoutes.delete('/products/:id', async (req, res) =>{
    const {id}=req.params
    try {
       

       const upadat=await productModel.findByIdAndDelete({_id:id})
        res.status(201).send({"message":"product deleted successfully"})
       
    } catch (error) {
        res.send(error)
    }
})
module.exports={productRoutes}