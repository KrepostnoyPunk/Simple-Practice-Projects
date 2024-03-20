const imageContainerEl=document.querySelector('.img-container')
const prevBtnEl=document.getElementById('prev')
const nextBtnEl=document.getElementById('next')

let x=0

let timeout;

prevBtnEl.addEventListener('click',()=>{
    x+=45;
    clearTimeout(timeout)
    updateGallery()
})

nextBtnEl.addEventListener('click',()=>{
    x-=45;
    clearTimeout(timeout)

    updateGallery()
})

function updateGallery(){
    imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
    timeout=setTimeout(()=>{
        x-=45
        updateGallery()
    }, 4000)
}

updateGallery()