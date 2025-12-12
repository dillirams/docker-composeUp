import express from 'express'
import { PrismaClient } from '@prisma/client'
const app=express()
const prisma=new PrismaClient();
app.use(express.json());

app.get('/',async(req,res)=>{
    const user=await prisma.user.findMany();
    res.status(200).json({
        message:"the user are",
        user:user
    })

    console.log("the user are"+user)
})

interface InputType{
    name:string,
    password:string
}

app.post('/',async(req,res)=>{

    const input:InputType=req.body;
    const user=await prisma.user.findFirst({
        where:{
            name:input.name
        }
    })
    if(user){
        res.status(500).send({
            message:"user already exist"
        })
    }

    try{
        const user=await prisma.user.create({
            data:{
                name:input.name,
                password:input.password
            }
        })
        res.status(200).json({
            message:"user created successfully"
        })

    }catch(e){
        res.status(404).json({
            message:"something went wrong"
        })
    }
})

app.listen(3000, ()=>{
    console.log("the app is listening to 3000")
})