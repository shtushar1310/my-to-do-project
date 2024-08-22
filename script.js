const inputBox=document.querySelector('#inputBox');
const addButton=document.querySelector('#addBtn')
const unorderList=document.querySelector('.todoList')

let editBtnToDO=null;

const addFunction=()=>{
    let inputValue=inputBox.value;
    if(inputValue===""){
        alert('write somethings on To-Do-input')
        return false;
    }

    if(addButton.value==='EDIT'){
        editBtnToDO.target.previousElementSibling.innerHTML=inputValue
        addButton.value='Add'
        inputBox.value=''
    }
    else{
    
        const addList=document.createElement('li')
        const addPara=document.createElement('p')

        addPara.innerText=inputValue;

       unorderList.appendChild(addList)
        addList.appendChild(addPara)

        // creating the editBtn

        const createEditBtn=document.createElement('button')
        createEditBtn.innerHTML='EDIT';
        createEditBtn.classList.add('btn','editBtn')

        addList.appendChild(createEditBtn)
       
        // creating the deleteBtn
         const createDeleteBtn=document.createElement('button')
         createDeleteBtn.innerHTML='DELETE'
         createDeleteBtn.classList.add('btn','deleteBtn')
        //  console.log(createDeleteBtn)
         addList.appendChild(createDeleteBtn) 

        // completion of task
        const myElement= document.createElement('p')
        myElement.innerHTML='COMPLETED'
        addList.appendChild(myElement)
        
        
    inputBox.value=''
    
}
}

const updateToDo=(e)=>{

//    console.log(e.target)
if(e.target.innerHTML==='DELETE'){
   unorderList.removeChild(e.target.parentElement) 
}
if(e.target.innerHTML==='EDIT'){
    inputBox.value = e.target.previousElementSibling.innerHTML;
     
    inputBox.focus()
    addButton.value='EDIT'
    editBtnToDO=e
    // console.log(e)
}
if(e.target.innerHTML==='COMPLETED'){

    e.target.parentElement.innerHTML='COMPLETED'
    // console.log(e.target.innerHTML)
}


  
}



addButton.addEventListener( 'click',()=>{
    addFunction()
})
unorderList.addEventListener('click', updateToDo)

