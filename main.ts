sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    bambooLeaves.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(3)
})
let bambooLeaves: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(assets.image`Koala`, SpriteKind.Player)
controller.moveSprite(mySprite)
bambooLeaves = sprites.create(assets.image`bambooLeaf`, SpriteKind.Food)
