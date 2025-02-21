
let io

module.exports = {
    socketIO:(server)=>{
    io = require('socket.io')(server)
    return io
}  ,

    getIO:()=>{
    return io
}
}

