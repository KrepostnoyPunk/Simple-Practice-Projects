const btnEls=document.querySelectorAll('.btn')
const value=document.getElementById('value')


let count=0;


btnEls.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const target=e.currentTarget.classList;
        // console.log(styles);
        if(target.contains('decrease')){
            count--;
        } else if(target.contains('increase')){
            count++;
        } else{
            count=0;
        }
        value.textContent=count;
        if(count>0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color='crimson';
        }
        if(count===0){
            value.style.color='gray';
        }
    })
})