gsap.from("h4", {
    y: -800,
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
})
gsap.from(".content .left h1, .content .left p  ", {
    y: -800,
    delay: 0.7,
    duration: 1.2,

})
gsap.from(".content .left button  ", {
    y: -800,
    delay: 0.3,
    duration: 0.9,
    stagger: 0.7,
    transform: "scale(-0.5,1)",


})
gsap.from(".nav button  ", {
    backgoundColor: "orange",
    duration: 1,
    delay: 0.1,
    transform: "scale(-0.5,1)"



})



