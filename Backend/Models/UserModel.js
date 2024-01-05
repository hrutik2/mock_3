const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true, minlength: 1, maxlength: 50},
    email:{type:String,unique:true,lowercase:true,required:true,
        validate: {
            validator: (value) => {
             
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format.'
          }
    
    
    },
    password:{type:String,required:true},
    avatar: {
        type: String,
        required: true,
        validate: {
          validator: (value) => {

            const urlPattern = /^(ftp|http|https):\/\/[^ "]/;
            return urlPattern.test(value);
            
          },
          message: 'Invalid URL format for avatar.'
        }
},
    created_at: {
        type: Date,
      
      },
      updated_at: {
        type: Date,
      }
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}