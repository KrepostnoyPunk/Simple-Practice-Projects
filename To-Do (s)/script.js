const inputEl=document.getElementById('input');
const listEl=document.getElementById('list-container');
const btnEl=document.querySelector('.btn')


function createToDo(){
    if(inputEl.value===''){
        alert('You must write something!')
    } else {
        let li=document.createElement('li')
        li.innerHTML=inputEl.value;
        listEl.appendChild(li)
        let closer=document.createElement('span');
        closer.innerHTML='\u00d7'
        li.appendChild(closer)
    }
    inputEl.value='';
    saveDataToLocalStorage();
}

btnEl.addEventListener('click', createToDo)

inputEl.addEventListener('keyup', key=>{
    if(key.code==='Enter'){
        createToDo();
    }
})

listEl.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveDataToLocalStorage();
    } else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveDataToLocalStorage();
    }
})

function saveDataToLocalStorage(){
    localStorage.setItem('data', listEl.innerHTML)
}

function getDataFromLocalStorage(){
    listEl.innerHTML=localStorage.getItem('data')
}

getDataFromLocalStorage()