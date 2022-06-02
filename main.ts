controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.setVelocity(0, -35)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.y += 10
})
function whenspritetouchesgreentile () {
    if (ball.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        animation.runImageAnimation(
        ball,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 1 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 1 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 1 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 1 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 1 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 1 9 9 9 9 9 9 9 . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 1 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 1 1 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 1 1 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
    }
}
function whenballtouchblackdeath () {
    if (ball.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        game.over(false, effects.confetti)
    }
}
let ball: Sprite = null
let gravity = 1
tiles.setCurrentTilemap(tilemap`level1`)
ball = sprites.create(assets.image`ball`, SpriteKind.Player)
tiles.placeOnRandomTile(ball, assets.tile`myTile3`)
scene.cameraFollowSprite(ball)
forever(function () {
    whenspritetouchesgreentile()
    whenballtouchblackdeath()
})
