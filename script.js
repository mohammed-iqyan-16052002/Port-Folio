let tl = gsap.timeline()

tl.to('.cont', {
    y: -500,
    opacity: 0,
    duration: 2,
    delay: 1,
    scrub: 2,
    pin: true
})

tl.from('.p ', {
    y: -200,
    opacity: 0,

})

tl.from('.navbar li', {
    y: -200,
    opacity: 0,

})

gsap.from('.img img', {
    x: 100,
    opacity: 0,
    delay: 4,
    duration: 1
})

gsap.from('.text h1', {
    x: -200,
    opacity: 0,
    delay: 4,
    duration: 1
})

gsap.from('.text button', {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 4
})

gsap.to('.cont h1', {
    y: -200,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.7

})

gsap.from('.imgs ', {
    x: -200,
    stagger: 1,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: '.third span',
        scroller: 'body',
        start: 'top 10%'
    },
    pin: true
})


gsap.from('.percent p', {
    x:-300,
    stagger: 0,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:'.myimg #p2',
        scroller:'body',
        
    }

})


let images = document.querySelectorAll('.images');

images.forEach(function (image) {
    image.addEventListener('mouseover', function () {
        let value = image.querySelector('.value');
        if (value) {
            value.style.marginTop = '50%';
        }
    });

    image.addEventListener('mouseout', function () {
        let value = image.querySelector('.value');
        if (value) {
            value.style.marginTop = '70%';
        }
    });
});


let skill = document.getElementById('mainskill');
let exp = document.getElementById('Experiance');
let ed = document.getElementById('Education');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
skill.style.display = 'block';
exp.style.display = 'none';
ed.style.display = 'none';

btn1.addEventListener('click', () => {
    setTimeout(() => {
        skill.style.display = 'block';
        exp.style.display = 'none';
        ed.style.display = 'none';
        btn1.style.background = ' var(--lightest-navy)';
        btn2.style.background = 'transparent';
        btn3.style.background = ' transparent';
    }, 500)

})

btn2.addEventListener('click', () => {
    setTimeout(() => {
        exp.style.display = 'block'
        skill.style.display = 'none'
        ed.style.display = 'none';
        btn2.style.background = ' var(--lightest-navy)';
        btn1.style.background = 'transparent';
        btn3.style.background = 'transparent';
    }, 500)

})

btn3.addEventListener('click', () => {
    setTimeout(() => {
        exp.style.display = 'none'
        skill.style.display = 'none'
        ed.style.display = 'block'
        btn1.style.background = 'transparent';
        btn2.style.background = ' transparent';
        btn3.style.background = 'var(--lightest-navy)'
    }, 500)

})

document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileContent = 'This is the content of the file that you want to download.';
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'c:\Users\lenovo\Downloads\Resume_Mohammed Iqyan.pdf'; 
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  











