import mongoose from "mongoose"
import { type } from "os"
import { stringify } from "querystring"
 // create  the object by the mongoes class
const userschema= new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please enter the your username"],
    unique:true,
  },
  email:{
    type:String,
    required:[true,"Please enter  your Email"],
    unique:true
  },
  password:{
     type:String,
     required:[true,"PLease Enter the password"],
  },
  // i will send  the email and user click on the eamil and then verified 
  Isverified:{
    type:Boolean,
    default:false

  } ,
  iAdmin:{
    type:Boolean,
    default:false
  },
  // to update the password in the case of  the forgate 
 forgotpasswordToken: {
  type: String,   // Capital S — this is Mongoose's String type
},
forgotpasswordTokenExpiray: {
  type: Date,     // This one is fine as-is
},
 // to make the user verify in the system
  verifedToken:{
    type: String,
  },

   // to make the user verify in the system for how much time 
  verifedTokenExpiray:{
    type:Date
  }


})

// mongoose.model.user  it check if the user exsited in the  mongoos 
// if  it is not selected in the db in the  create it mongoose.model("user",userschema)


const User = mongoose.models.user || mongoose.model("user", userschema);
export default User