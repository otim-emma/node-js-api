const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    const token = req.get('Authorization').split(' ')[1]
    const decodedToken = jwt.verify(token,'keyboard cat')
    if(!decodedToken){
        res.status(422).json({message:'failed authentication'})
    }
    req.user = decodedToken
    next()
}