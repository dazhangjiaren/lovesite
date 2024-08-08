new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("张军 && 赵心婷")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这是我们在一起过的第一个七夕，时间真的很快")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();