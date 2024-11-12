const express = require('express')
const app = express()
require ('dotenv').config()
const PORT = process.env.PORT || 5300 
const mongoose = require ('mongoose')
const mongodb_uri =  process.env.URI 
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// const AbroadVISA  = [
//     {
//         Name: Victor, 
//         phoneno: '08012345678',
//         sex: female
//     },
//     {
//         Name: Ayomide, 
//         phoneno:'07022226459',
//         sex: female
//     },
//     {
//         Name: Stephan, 
//         phoneno: '08051733440',
//         sex: Male
//     }, 
//     {
//         Name: Paul,
//         phoneno: '07033871435',     
//         sex: female
//     }
// ]

mongoose.connect(mongodb_uri)
.then(()=>{
    console.log('mongodb conneted');
    
}).catch((err)=>{
    console.log(err);
    
})

let  userSchema = mongoose.Schema ({ 
    item: String, 
})
let userModel = mongoose.model('users', userSchema)

app.get ('/home', (req, res)=>{ 
    res.send (AbroadVISA )
}) 
app.post(`submit`, (res, req,)=>{
    console.log('Recieved data', req.body);
    const form = new userModel(req.body)
    form.save()
}) 
app.listen(PORT, () =>{
    console.log(`Move on! Server has started at ${PORT}`);
    })  