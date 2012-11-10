var emitStream = require('emit-stream')
,   net = require('net')
,   JSONStream = require('JSONStream')
,   stream = net.connect(5555).pipe(JSONStream.parse([true]))
,   ev = emitStream(stream)
,   client = require('ar-drone')
,   c = 'takeoff land up down clockwise counterClockwise front back left right stop disableEmergency'.split(' ')

ev.on('cmd', function (cmd) {
    // client[cmd.method](cmd.args)
    console.log(cmd)
})

   /* 
var animations = {
    animate: ['phiM30Deg'
             ,'phi30Deg'
             ,'thetaM30Deg'
             ,'theta30Deg'
             ,'theta20degYaw200deg'
             ,'theta20degYawM200deg'
             ,'turnaround'
             ,'turnaroundGodown'
             ,'yawShake'
             ,'yawDance'
             ,'phiDance'
             ,'thetaDance'
             ,'vzDance'
             ,'wave'
             ,'phiThetaMixed'
             ,'doublePhiThetaMixed'
             ,'flipAhead'
             ,'flipBehind'
             ,'flipLeft'
             ,'flipRight']
    ,
    animateLeds:['blinkGreenRed'
                ,'blinkGreen'
                ,'blinkRed'
                ,'blinkOrange'
                ,'snakeGreenRed'
                ,'fire'
                ,'standard'
                ,'red'
                ,'green'
                ,'redSnake'
                ,'blank'
                ,'rightMissile'
                ,'leftMissile'
                ,'doubleMissile'
                ,'frontLeftGreenOthersRed'
                ,'frontRightGreenOthersRed'
                ,'rearRightGreenOthersRed'
                ,'rearLeftGreenOthersRed'
                ,'leftGreenRightRed'
                ,'leftRedRightGreen'
                ,'blinkStandard'
                ]
}

*/
