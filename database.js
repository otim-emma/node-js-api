const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const client = new MongoClient('<add you mongodb URL>')
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
