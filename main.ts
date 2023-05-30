input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
    }
})
