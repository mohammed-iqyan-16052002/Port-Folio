let tl=gsap.timeline()

tl.to('.cont',{
    y:-500,
    opacity:0,
    duration:3,
    delay:1,
    scrub:2,
    pin:true
})

tl.from('.p p',{
    y:-200,
    opacity:0,

})

tl.from('.navbar li',{
    y:-200,
    opacity:0,

})

tl.from('img',{
    x:100,
    opacity:0,
})


gsap.from('.text h1',{
    x:-200,
    opacity:0,
    duration:2,
    delay:5
})

gsap.from('.text button',{
    x:-200,
    opacity:0,
    duration:2,
    delay:5
})



gsap.to('.cont h1',{
    y:-200,
    opacity:0,
    duration:3,
    delay:1,
    stagger:0.7
  
})


let container=document.querySelector('body')
let mouse=document.getElementById('mouse')
mouse.style.display="none"

container.addEventListener('mousemove',function(val){
  setTimeout(()=>{
    mouse.style.display='block'
      gsap.to(mouse,{
        x:val.x,
        y:val.y,
        // duration:1
        ease:'back.out'
       })
  },100) 
})





