const btnList=document.getElementsByClassName('com-btn')
const assignedTask=document.getElementById('assigned-task')
const completedTask=document.getElementById('completed-task')
const taskContainer=document.getElementById('task-container')
const clearTaskbtn=document.getElementById('cler-task-btn')
const date=document.getElementById('date')


assignedTask.innerText=btnList.length
const currentDate=new Date().toDateString()
date.innerHTML=currentDate.split(' ')[0]+',<br>'+currentDate.slice(3)

for (const element of btnList) {
    element.addEventListener('click',(event)=>{
        alert('Board updated Successfully')

        if (btnList.length===1) {
            alert('Congrats!!! You have completed all the current task')
        }
        event.target.classList.remove('com-btn')
        assignedTask.innerText=btnList.length
        event.target.setAttribute('disabled','')
       completedTask.innerText = parseInt(completedTask.innerText)+1
       const taskItemName=event.target.parentElement.parentElement.children[1].innerText
       newTask(taskItemName)
    })
}


function newTask(taskItemName) {
    const time=new Date().toTimeString().split(' ')[0]
    const hour=parseInt(time.split(':')[0])
    const justTime=hour>=12?hour-12+time.slice(2)+' PM':hour+time.slice(2)+' AM'
    const newItem=document.createElement('p')
    newItem.classList.add('task')
    newItem.innerHTML=`You have Completed The Task ${taskItemName} at <span class='font-semibold'>${justTime}</span>`
    taskContainer.append(newItem)
    
}
clearTaskbtn.addEventListener('click',()=>{
    taskContainer.replaceChildren()
})

document.getElementById('randomBtn').addEventListener('click',()=>{
    const randomColor=[]
    for (let i = 0; i < 3; i++) {
        const random=Math.floor(Math.random()*256)
        randomColor.push(random) 
    }
    document.querySelector('body').style.backgroundColor=`rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`
})

document.getElementById("blog-section").addEventListener('click',()=>{
    document.location.href=' ./blog.html'
})