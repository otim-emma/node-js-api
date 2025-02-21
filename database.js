const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const client = new MongoClient('mongodb+srv://otimemma270:e1rIOmt3OQKpHx6m@library.a46n7.mongodb.net/?retryWrites=true&w=majority&appName=library')
let _db
const mongoConnect = (cb)=>{
    client.connect().then((client)=>{
        cb()
        console.log('Connected')
        _db = client.db()
    }).catch((err)=>{
        return err
    })
}
const getDb = ()=>{
    return _db
}

exports.getDb = getDb
exports.mongoConnect = mongoConnect
