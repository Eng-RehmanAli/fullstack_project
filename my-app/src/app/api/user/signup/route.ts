// test case of the signup page 
// import the connect from the mongoos db and then 
// import the user for the make the  new user 
// import bycript and 
// then  take the data from the requeset
// destrcuture and validate to the the each field 
// chech the user already exsit
// if not make the new user and save it 
import {connect} from "mongoose"
import User from "@/models/model.user.js"
import bcrypt from "bcryptjs"
import { NextRequest,NextResponse } from "next/server"
import dbconfig from "@/dbconfig/dbconfig";


connect(process.env.url_id!);

export async function POST(request:NextRequest){
    // use the try nnd catch to handle the error
    try{
        
        try{
            // mean the  db is connected so
             await dbconfig();
            console.log(`The db is connected so`)
        }catch(error){
            console.log(`The db is connected so `,error);
        }
        const bodydata=await request.json();
        // destructure to the body 
        const {username,email,password}=bodydata;
        
        if(username==""){
            return  NextResponse.json({error:"Enter the username"})
        }
        if (!email || email == "") {
    return NextResponse.json({ error: "Enter the email" });
}

if (!email.includes("@")) {
    return NextResponse.json({ error: "Email must contain @" });
}


   if (!password || password == "") {
    return NextResponse.json({ error: "Enter the password" });
     }

     // we use the regix in the case of the validation so 
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/;
     if (!passwordRegex.test(password)) {
    return NextResponse.json({
        error: "Password must include at least one uppercase letter, one lowercase letter, and one special character"
    });
     }
         // check the user alrady exsist
         const user=await User.findOne({email});
         if(user){
            
          return NextResponse.json({error:"The user is already exsit"},{status:500});
         }
         // hash to the passowrd



         const salt=  await bcrypt.genSalt(10);
         const hashpassword= await bcrypt.hash(password,salt);
         const newuser= new User({
            username,
            email,
            password:hashpassword
         })
         const saveuser=await newuser.save();
         return NextResponse.json({
            messsage:"The user  has been successfully registed",
            success:true,
            saveuser
         })


    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}
