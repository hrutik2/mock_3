const express=require("express")
require("dotenv").config()
const cors=require("cors")
const { Connection } = require("./db")
const { userRoutes } = require("./All routes/UserRoutes")
const { productRoutes } = require("./All routes/productRoutes")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",userRoutes)
app.use("/api",productRoutes)
app.listen(process.env.Port,async()=>{
    try {
       await Connection
       console.log(`Server is running on port ${process.env.Port}`)
    } catch (error) {
        console.log(error)
    }
})