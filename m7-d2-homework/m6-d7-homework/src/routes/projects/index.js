const express= require('express')
const db= require('../../db')
const uniqid=require('uniqid')

const router=express.Router()



router.post("/:studentId", async (req, res)=> {
    const response =
    await db.query(`INSERT INTO 
    "projects" (projectname, description,  "repoURL", "liveURL", "studentId")                                    
    Values ($1, $2, $3, $4, $5)
    RETURNING *`, 
    [ req.body.projectname, req.body.description, req.body.repoURL, req.body.liveURL, req.params.studentId ])
    console.log(response)
    res.send(response.rows[0])
})

router.get("/:studentId", async (req, res)=> {
   const response= await db.query('SELECT * FROM "projects" WHERE "studentId"=$1 ',[req.params.studentId]) 
   res.send(response.rows)
})

router.get('/getbyEmail/:email',async(req,res)=>{
    console.log(req.params.email)
    let response=await db.query('SELECT * FROM "Students" CROSS JOIN "projects" WHERE email=$1',[req.params.email])
    res.send(response.rows)
})

module.exports=router