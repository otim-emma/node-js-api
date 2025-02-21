const express = require('express')
const {mongoConnect} = require('./database/database')
const { getDb } = require('./database/database')
const jwt = require('jsonwebtoken')
const isAuth = require('./middleware/isAuth')
const cors = require('cors')
const http = require('http')
const {Server} = require('socket.io')
const bodyParser  = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const server = http.createServer(app)
const io = new Server(server)
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next()
})
app.get('/',(req,res)=>{
const token = jwt.sign({
    name:'emma'
},
'keyboard cat',
{expiresIn:'1hr'}
)
res.status(200).json({token})
})

app.post('/message',(req,res)=>{
    const text = req.body._text
    let db = getDb()
    db.collection('test').insertOne({
        type:chats,
        date:new Date(),
        text:text
    }).then(()=>{
        res.status(200).json({message:'sent'})
    })
})

app.get('/data',isAuth,(req,res)=>{
    let db = getDb()
    db.collection('test').find().toArray().then((data)=>{
        res.status(200).json({data})   
    }) 
    io.on('connection',(socket)=>{
        console.log('successfully connected',socket.id)
        io.emit('message','⚽mancity 2 : realmadrid 3')
            socket.on('data',(message)=>{
                console.log('received',message)
                io.emit('tweet',message)
                io.emit('your data','butabika')
            })
    })    
})
mongoConnect(()=>{
    server.listen(5000) 
})

