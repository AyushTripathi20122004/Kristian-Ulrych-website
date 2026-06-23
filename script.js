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


// get in touch button page start here

const GetInTouchbtn=document.querySelector('.GetInTouchbtn');
const FormWindow=document.querySelector('.GetInTouchSection')
const MainSection=document.querySelector('.MainSection');
GetInTouchbtn.addEventListener('click',()=>{
    console.log('btn clicked');
    
    MainSection.style.display='none';
    FormWindow.style.display='flex';
})
