input.onGesture(Gesture.LogoDown, function () {
    up = 0
})
input.onGesture(Gesture.ScreenUp, function () {
    left = 2
    up = 2
})
input.onGesture(Gesture.TiltRight, function () {
    left = 0
})
input.onGesture(Gesture.LogoUp, function () {
    up = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    left = 1
})
let left = 0
let up = 0
up = 2
left = 2
let posY = 2
let posX = 2
basic.forever(function () {
    led.toggle(posX, posY)
    if (up == 1) {
        if (posY < 4) {
            posY = posY + 1
        }
    } else if (up == 0) {
        if (posY > 0) {
            posY = posY - 1
        }
    }
    if (left == 1) {
        if (posX > 0) {
            posX = posX - 1
        }
    } else if (left == 0) {
        if (posX < 4) {
            posX = posX + 1
        }
    }
    led.plot(posX, posY)
})
