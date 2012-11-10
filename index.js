var emitStream = require('emit-stream')
,   net = require('net')
,   JSONStream = require('JSONStream')
,   stream = net.connect(5555).pipe(JSONStream.parse([true]))
,   ev = emitStream(stream)
,   client = require('ar-drone').createClient()

ev.on('cmd', function (cmd) {
    if (client.hasOwnProperty(cmd.method) && cmd.args != undefined)
        client[cmd.method](cmd.args)
    console.log(cmd)
})

