let tl=gsap.timeline()

tl.to('.cont',{
    y:-500,
    opacity:0,
    duration:3,
    delay:2,
    
})

tl.from('.p p',{
    y:-200,
    opacity:0,

})

tl.from('.navbar li',{
    y:-200,
    stagger:0,
    opacity:0,
    // stagger:0.7

})

gsap.to('.cont h1',{
    y:-200,
    opacity:0,
    duration:3,
    delay:1,
    stagger:0.7
  
})
