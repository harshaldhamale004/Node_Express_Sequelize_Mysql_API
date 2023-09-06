const express = require ('express')
const cors = require ('cors')
// const bodyParser = require('body-parser');

const app= express()

// var corOptions = {
//     origin: 'http://localhost:8081'
// }


//middlewares

// app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extend:true}));

// app.use(bodyParser.json());

//router links
const router = require ('./routes/productRouter.js')
app.use('/api/products', router)


//testing api

app.get('/', (req, res)=>{
    res.json({message: 'hello from apis'})
})

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, ()=>{
    console.log(`server is running port ${PORT}`)
})