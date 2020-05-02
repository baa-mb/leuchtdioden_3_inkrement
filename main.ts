input.onButtonPressed(Button.A, function () {
    helligkeit = 0
})
function ein (num: number) {
    pins.analogWritePin(AnalogPin.P0, num)
    pins.analogWritePin(AnalogPin.P1, num)
    pins.analogWritePin(AnalogPin.P2, num)
}
let helligkeit = 0
helligkeit = 0
basic.forever(function () {
    ein(helligkeit)
    basic.pause(100)
    helligkeit += 10
    serial.writeValue("x", helligkeit)
})
