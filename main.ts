basic.forever(function () {
    if (ps2controller.button_pressed(ps2controller.PS2Button.Cross) > 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(ps2controller.button_pressed(ps2controller.PS2Button.Square), 100)
    }
    if (0 > 0) {
        pins.digitalWritePin(DigitalPin.P11, 100)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (ps2controller.button_pressed(ps2controller.PS2Button.Circle) > 0) {
        pins.digitalWritePin(DigitalPin.P12, 100)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
    }
    if (ps2controller.button_pressed(ps2controller.PS2Button.Triangle) > 0) {
        pins.digitalWritePin(DigitalPin.P13, 100)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            # . . . #
            # # # # #
            `)
    }
})
