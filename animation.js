const navTl=gsap.timeline({ defaults: { duration: 0.4 } });
navTl.from('.navbar',{
    y:20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)'
})

navTl.from('.logo h1',{
    y:20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)',
    stagger:0.2
})

navTl.from('.Iconlist li',{
    y:20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)',
    stagger:0.2
})

const mainTl=gsap.timeline();

mainTl.from(".HeroText span",{
    x:-20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)',
    stagger: 0.2
})
mainTl.from('.list span',{
    y: 20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)',
    stagger: 0.2
})

mainTl.from('.introImage',{
    x: 20,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1.5)',
    stagger: 0.2
})

gsap.from(".autoImage", {
    opacity:0,
    filter:'blur(10px)',
    scrollTrigger:{
        trigger:'.autoImage',
        scroller:'body'
    }
});