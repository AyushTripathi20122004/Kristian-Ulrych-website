// smooth scrolling
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


let index=0
const imageLink=
[
    "https://www.ulrychkristian.cz/_next/image?url=%2Fimages%2Feqvista%2Fcloseup.png&w=3840&q=75"
    ,
    "https://www.ulrychkristian.cz/_next/image?url=%2Fimages%2Fveevoy%2FHanging%20Vertical%20Banner%20Mockup.png&w=3840&q=75"
    ,
    "https://www.ulrychkristian.cz/_next/image?url=%2Fimages%2Feqvista%2Feqvista_3.jpg&w=3840&q=75"
    ,
    "https://www.ulrychkristian.cz/_next/image?url=%2Fimages%2Fveevoy%2FMacBook%20Pro%2016.png&w=3840&q=75"
    ,
    "https://www.ulrychkristian.cz/_next/image?url=%2Fimages%2Fmapwhizz%2Fmapwhizz-commute-analysis-macbook.png&w=3840&q=75"
    
    ]

const autoImage=document.querySelector('.image');

function changeImage(){
    console.log(index);

    if(autoImage){
        autoImage.classList.remove('opacity-0')
        autoImage.src= imageLink[index]
    }
    
}
changeImage()

setInterval(()=>{
    autoImage.classList.add('opacity-0')
    changeImage()
    index=(index+1)%(imageLink.length)
},2500)



const MainSection = document.querySelector('.MainSection');
const formSection = document.querySelector('.formSection');
const GetInTouchbtn = document.querySelectorAll('.GetInTouchbtn');

// show form section
GetInTouchbtn.forEach(elem => {
    elem.addEventListener('click', () => {
        MainSection.style.display = 'none';
        formSection.style.display = 'block';
    });
});

// leave form btn
const leaveForm = document.querySelector('.leaveForm');

leaveForm.addEventListener('click', () => {
    MainSection.style.display = 'block';
    formSection.style.display = 'none';
});

// sidebar btn

const sideBarBtn=document.querySelector('.sideBarBtn')
const sidebar=document.querySelector('.sidebar')
sideBarBtn.addEventListener('click',()=>{
    if(sidebar.classList.contains('hidden')){
        sidebar.classList.remove('hidden');
        sidebar.classList.add('block');
        // icons animation
        gsap.from('.sideIconListr li',{
            y:20,
            opacity:0,
            filter:'blur(10px)',
            ease:'back.out(1.5)',
            stagger:0.2
        })
    }
})

const leaveSidebar=document.querySelector('.leaveSidebar')
leaveSidebar.addEventListener('click',()=>{
    if(sidebar.classList.contains('block')){
        sidebar.classList.remove('block');
        sidebar.classList.add('hidden');
    }
})
document.querySelector('.sidebarGIt').addEventListener('click',()=>{
    if(sidebar.classList.contains('block')){
        sidebar.classList.remove('block');
        sidebar.classList.add('hidden');
    }
})
